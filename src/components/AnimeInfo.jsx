// file: src/components/PhoneInfo.js
import React, { Component } from 'react';

class AnimeInfo extends Component {

  
  static defaultProps = {
    info: []
  }

  state = {
    mal_id:0,
    url: '',
    image_url: '',
    name: '',
    role: ''
  }
 
  render() {
    //console.log('render AnimeInfo ' + this.props.info.mal_id);
    //const { editing } = this.state;
   
    const {
        mal_id,
        url,
        image_url,
        name,
        role
      } = this.props.info;

    return (
      <div className="single">
        <div className="img"><img src={image_url} className="singleImage" alt={name}/></div>
        <div className="name">{name}</div>
        <div className="url"><a href={url} target={"Anime"+mal_id}>Link</a></div>
        <div className="role">{role}</div>
      </div>
    );
  }
}

export default AnimeInfo;