import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Header from './components/Header';
import MusicList from './components/MusicList'

const App = () => {
  const { mainStyle } = styles;
  return (
    <View style={mainStyle}>
      <Header headerText={'Music'}/>
      <MusicList />
    </View>
  )
};

export default App;