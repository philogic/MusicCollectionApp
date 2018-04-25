import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class MusicList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }
  render() {
    return <View>
      <Text>MusicList</Text>
    </View>
  }
}


export default MusicList;