
import React, { Component } from 'react';
import AnimeInfo from './AnimeInfo';

class AnimeInfoList extends Component {
  static defaultProps = {
    list: [],
    //onRemove: () => console.warn('onRemove not defined'),
    //onUpdate: () => console.warn('onUpdate not defined'),
  }
 
  render() {
    //console.log('render PhoneInfoList');
    const { data } = this.props;
    const list = data.map(
      info => (
      <AnimeInfo 
      key={info.mal_id} 
      info={info}
      //onRemove={onRemove}
      //onUpdate={onUpdate}
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