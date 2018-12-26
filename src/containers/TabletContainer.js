import React, { Component } from 'react';
import { connect } from 'react-redux';
import Animations from 'components/AnimeInfoList';
import { getPageNumber, setPageNumber, getData } from "modules/data";
import { ApiActions, LoadmoreActions } from 'store/actionCreators';
import { RiseLoader } from 'react-spinners';

class TabletContainer extends Component {
  
  state = {
    //loadedPage:this.loadingprops.loadedPage,
    information: [],
    keyword: '',
    color: '#36D7B7',
    showPicker: false,
    sorting:'',
    apiStatus:'',
    apiStatusText:''
  }  

  componentDidMount() {
    //console.log("Tablet view mounted");

    if( getPageNumber()===0 )
    {
      LoadmoreActions.loadmore()
    }
    else{
      this.setState({information: getData(),})
    }

  }

  componentWillReceiveProps(nextProps) {
   if(this.props.loadedPage !== nextProps.loadedPage) {
      this.getPost(nextProps.loadedPage);
    }
  }
  
  getPost = async (postId) => {
    try {
        await ApiActions.getPost(postId);
        setPageNumber(postId);
        this.setState({information:getData()})
        if(this.state.apiStatus!==200)this.setState({apiStatus:200})
       } catch(error) {
        
        this.setState(
          {apiStatus:error.response.status,
            apiStatusText:error.response.statusText,
          });
   
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    if ( nextProps.info === this.props.info
        && nextState.keyword === this.state.keyword
        && nextState.information === this.state.information
        && nextProps.loading === this.props.loading
        && nextProps.error === this.props.error
        ) {
      return false;
    }
    else{
    
      return true;
    }

    
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {

    const { error, loading } = this.props;
    const { information, keyword,apiStatus } = this.state;
    const filteredList = information.filter(
      info => new RegExp(keyword, 'i').test(info.name)
    
    ).sort((a,b) => {
      if (this.sorting === '' || this.sorting === 'name') {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1:a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 0;
      }
      else if (this.sorting === 'role') {
        return a.role.toUpperCase() > b.role.toUpperCase() ? 1:a.role.toUpperCase() < b.role.toUpperCase() ? -1 : 0;
      }
      return true;
     }
   );

    return (
      <React.Fragment>
        <div className="top-fixed">
            <input 
              placeholder="Type anime name ..." 
              onChange={this.handleChange}
              value={keyword}
              className="searchField"
            />
        </div>
        <div className="content">
          <Animations
            data={filteredList}
            //list={AnimeInfoList}

          />
        </div>
        <div className="divLoadmore">
        { 
            loading 
            ? <div className="loader" ><RiseLoader
                color={'#123abc'} 
                loading={this.state.loading}
                size={20}
                margin={'20px'} 
              /> </div>
            : error&&apiStatus!==404 
              ? <h1>All Loaded.</h1>
              : <button onClick={LoadmoreActions.loadmore}>Load More</button>
          }
          </div>
      </React.Fragment>
    );
  }
}

//export default TabletContainer;

export default connect(
  (state) => ({
      loadedPage: state.loadmore,
      information: state.information,
      api:state.api.data,
      loading: state.pender.pending['GET_POST'],
      error: state.pender.failure['GET_POST']
  }),
)(TabletContainer);