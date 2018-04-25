import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const MusicDetail = (props) => {
  return (
    <Card>
      <Text>{props.music.title}</Text>
    </Card>
  )
};

export default MusicDetail;