import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPageNumber, setPageNumber, Tips, getData } from "modules/data";
import { ApiActions } from 'store/actionCreators';
import ReactTable from "react-table";
import "react-table/react-table.css";
//import "./WebContainer.css";
import "./WebContainer.scss";

class WebContainer extends Component {
  constructor() {
    super();
    this.state = {
      information: [],
      keyword: '',
      sorted: [],
      page: 0,
      pageSize: 20,
      apiStatus:'',
      apiStatusText:'',
      //getPageNumber: getPageNumber,

    };
  }
 
  componentDidMount() {
    //window.addEventListener'rt-tbody', this.onScroll, false);
    if( getPageNumber()===0 ) this.getPost(1);
    else this.setState({information: getData()});
   
    document
      .querySelector(".rt-tbody")
      .addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    //window.removeEventListener('rt-tbody', this.onScroll, false);
    
    document
      .querySelector(".rt-tbody")
      .removeEventListener("scroll", this.onScroll, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if below condition is not change then return false.
    const {keyword,information, page, pageSize} = this.state;
    const {info,loading, error} = this.props;

    if ( nextProps.info === info
        && nextState.keyword === keyword
        && nextState.information === information
        && nextState.page === page
        && nextState.pageSize === pageSize
        && nextProps.loading === loading
        && nextProps.error === error
        ) {
      return false;
    }

    return true;
  }

  getPost = async (postId) => {

    try {
        await ApiActions.getPost(postId);
        setPageNumber(postId);
        this.setState({
          information:getData(),
          loadedPage:postId
        })
        if(this.state.apiStatus!==200)
        {
          this.setState({apiStatus:200});
        }

     } catch(error) {
        this.setState(
          {apiStatus:error.response.status,
            apiStatusText:error.response.statusText,
          }
        );
        if (error.response) {
     
        } else if (error.request) {
         
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
      console.log(error.config);
    }
  }

  onScroll = () => {
    //console.log(document.querySelector(".rt-tbody").scrollTop);
    const {scrollTop,scrollHeight, offsetHeight} = document.querySelector(".rt-tbody");
    if (
      scrollTop >= scrollHeight - offsetHeight ) {
      this.loadNext();
    }
  };

  loadNext() {
    const {length,} = this.state.information;
    const {page,pageSize,apiStatus} = this.state
    if(page === Math.floor(length/pageSize)&&apiStatus!==404)this.getPost(getPageNumber()+1);

  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => new RegExp(keyword, 'i').test(info.name)
    );
    
   return (
    <React.Fragment>
        <div className="top-fixed">
        <img src="https://myanimelist.net/images/mal-logo-xsmall@2x.png?v=160803001" className="imageLogo" alt="logo" />
          <input 
            placeholder="search name ..." 
            onChange={this.handleChange}
            value={keyword}
            className="searchField"
          />
        </div>
       
      <div className="content">
        <ReactTable
          data={filteredList}
          columns={[
            {
              //Header: "Detail Info",
              columns: [
                {
                  Header: "ID",
                  id: "mal_id",
                  //accessor: d => d.mal_id
                  accessor: "mal_id",
                  width: 100,
                },
                {
                  Header: "Image",
                  accessor: "image_url",
                  Cell: row => {
                    return (
                      <div>
                        <img className="webImage" height={34} src={row.original.image_url} alt={row.original.name} />
                      </div>
                    );
                  }
                }
              ]
            },
            {
              Header: "Base Info",
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Role",
                  accessor: "role"
                }
              ]
            },
            {
              Header: "URL",
              columns: [
                {
                  Header: "URL",
                  accessor: "url",
                  Cell: row => {
                    return (
                      <div>
                        <a href={row.original.url} target={"Anome_"+row.original.mal_id}>Link</a>
                      </div>
                    );
                  }
                },
                
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "name",
              desc: false
            }
          ]}
          defaultPageSize={25}
          showPagination={true}
          page={this.state.page}
          pageSize={this.state.pageSize}
          onPageSizeChange={(pageSize) => {this.setState({pageSize:pageSize})}}

          //onPageChange={page => this.setState({page}}
          onPageChange={(page) => {this.setState({ page:page })}}
          style={{
            height: "800px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
     </React.Fragment>
    );
  }
}

//export default WebContainer;
export default connect(
  (state) => ({
      loadedPage: state.loadedPage,
      information: state.information,
      keyword: state.keyword,
      loading: state.pender.pending['GET_POST'],
      error: state.pender.failure['GET_POST_FAILURE']
  }),
  
)(WebContainer);
