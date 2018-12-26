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

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
    
  }

  handleResize = () => {
    const {windowWidth} = this.state
    const {innerWidth,innerHeight}=window
    if((innerWidth>=1400&&windowWidth<1400)
      || (innerWidth>=700&&(windowWidth<700||windowWidth>1400))
      || (innerWidth<700&&windowWidth>700))
    {
      this.setState({ 
        windowHeight: innerHeight,
        windowWidth:innerWidth
      })
    }
       
  };
   
  render() {
    const {windowWidth} = this.state
    return (
      <AppTemplate
        container={
          windowWidth>1400?<WebContainer />
          :windowWidth>700?<TabletContainer />
          :<MobileContainer />
        }
        layout={
          windowWidth>1400?"web"
          :windowWidth>700?"tablet"
          :"mobile"
        }
      />
      
    );
  }
}

export default App;
