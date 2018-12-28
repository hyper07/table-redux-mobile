import React, { Component } from 'react';
import MobileContainer from 'containers/MobileContainer';
import TabletContainer from 'containers/TabletContainer';
import WebContainer from 'containers/WebContainer';
import AppTemplate from './AppTemplate';


class App extends Component {
 

  state={
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  }

   // this.zoomImage = this.zoomImage.bind(this)
  

  handleCreate = (data) => {
    console.log(data); // if App parent get data from chilren as props print out on console terminal
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
    
  }

  handleResize = () => {
    const {windowWidth} = this.state
    const {innerWidth, innerHeight} = window
    if((innerWidth >= 1400 && windowWidth < 1400)
      || (innerWidth >= 700&& (windowWidth < 700 || windowWidth > 1400))
      || (innerWidth < 700 && windowWidth > 700))
    {
      this.setState({ 
        windowHeight : innerHeight,
        windowWidth : innerWidth
      })
    }
       
  };
  
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  zoomImage = (data) => {
        
    var modal = document.getElementById('myModal');
    //var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = data.src;
    captionText.innerHTML = data.alt;
    
  }

  closePopup = () => { 
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  render() {

    if (this.state.error) alert("Error Occurred!. Please try again.");

    const {windowWidth} = this.state
    return (
      <React.Fragment>
        <AppTemplate
          container={
            windowWidth>1400?<WebContainer />
            :windowWidth>700?<TabletContainer zoom={this.zoomImage}/>
            :<MobileContainer onCreate={this.handleCreate} zoom={this.zoomImage}/> // set props for mobile container to get data 
          }
          layout={
            windowWidth>1400?"web"
            :windowWidth>700?"tablet"
            :"mobile"
          }
        />
        <div id="myModal" className="modal">
          <span className="close" onClick={this.closePopup}>&times;</span>
          <img className="modal-content" id="img01" alt="popup" />
          <div id="caption"></div>
        </div>
    </React.Fragment>
    );
  }
}

export default App;
