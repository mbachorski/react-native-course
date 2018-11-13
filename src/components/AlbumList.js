import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  // state initialization
  state = { albums: [] };

  componentWillMount(){
    // console.log('componentWillMount in AlbumList');
    // debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => console.log(response));
    // setState is Component's method
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // it should be id, not title
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state)

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
