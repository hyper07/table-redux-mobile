
import React, { Component } from 'react';
import AnimeInfo from './AnimeInfo';

class AnimeInfoList extends Component {
  static defaultProps = {
    list: [],
  }
 
  render() {

    const { data } = this.props;
    const list = data.map(
      info => (
      <AnimeInfo 
      key={info.mal_id} 
      info={info}
      zoom={this.props.zoom}
      />)
    );

    return (
      <React.Fragment>
        {list}    
      </React.Fragment>
    );
  }
}

export default AnimeInfoList;