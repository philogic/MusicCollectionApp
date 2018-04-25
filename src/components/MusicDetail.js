import React from 'react';
import { Text, View } from 'react-native'

const MusicDetail = (props) => {
  return (
    <View>
      <Text>{props.music.title}</Text>
    </View>
  )
};

export default MusicDetail;