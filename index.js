import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MusicList from './src/components/MusicList'

const App = () => (
  <View style={styles.mainStyle}>
    <Header headerText={'Music'}/>
    <MusicList />
  </View>
);

const styles = {
  mainStyle: {
    flex: 1
  }
};

AppRegistry.registerComponent('MusicCollectionApp', () => App);