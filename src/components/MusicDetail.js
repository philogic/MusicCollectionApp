import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const MusicDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <View/>
        <View style={styles.headerContentStyle}>
          <Text>{props.music.title}</Text>
          <Text>{props.music.artist}</Text>
        </View>
      </CardItem>
    </Card>
  )
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default MusicDetail;