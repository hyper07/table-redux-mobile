import React, { Component } from 'react';
import { connect } from 'react-redux';
import Animations from 'components/AnimeInfoList';
import { getPageNumber, setPageNumber, getData } from "modules/data";
import { ApiActions, LoadmoreActions } from 'store/actionCreators';
import { RiseLoader } from 'react-spinners';

class TabletContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: [],
      keyword: '',
      color: '#36D7B7',
      showPicker: false,
      sorting:'name',
      apiStatus:'',
      apiStatusText:''
    }  

    // This binding is necessary to make `this` work in the callback
    this.changeSort = this.changeSort.bind(this);
  }
  
  componentDidMount() {
    //console.log("Tablet view mounted");

    if( getPageNumber()===0){LoadmoreActions.loadmore()} // another examle to call function as button clicked.
    else{this.setState({information: getData(),})}

  }

  componentWillReceiveProps(nextProps) {
   if(this.props.loadedPage !== nextProps.loadedPage) {
      this.getPost(nextProps.loadedPage);
    }
  }
  

  shouldComponentUpdate(nextProps, nextState) {
    if ( nextProps.info === this.props.info
        && nextState.keyword === this.state.keyword
        && nextState.information === this.state.information
        && nextProps.loading === this.props.loading
        && nextProps.error === this.props.error
        && nextState.sorting === this.state.sorting
        ) {
      return false;
    }
   
    return true;
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
          console.log(error.response);
      } else if (error.request) {
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeSort = (e) => {
    if(this.state.sorting !== e.target.name)this.setState({sorting:e.target.name})
    else this.setState({sorting:''})
  }

  render() {

    const { error, loading } = this.props;
    const { information, keyword, apiStatus, sorting } = this.state;
    const filteredList = information.filter(
      info => new RegExp(keyword, 'i').test(info.name)
    
    ).sort((a,b) => {
      if (sorting === '' || sorting === 'name') {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1:a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 0;
      }
      else if (sorting === 'role') {
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
              name="keyword"
            />
            <button className={'btnRoleSort '+ (sorting==="role"?sorting:'')} name="role" onClick={this.changeSort}>Role</button>
            <button className={'btnNameSort '+ (sorting==="name"?sorting:'')} name="name" onClick={this.changeSort}>Name</button>
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
      sorting:state.sorting,
      loading: state.pender.pending['GET_POST'],
      error: state.pender.failure['GET_POST']
  }),
)(TabletContainer);