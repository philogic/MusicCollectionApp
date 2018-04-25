import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MusicList from './src/components/MusicList'

const App = () => (
  <View>
    <Header headerText={'Music'}/>
    <MusicList />
  </View>
);

AppRegistry.registerComponent('MusicCollectionApp', () => App);