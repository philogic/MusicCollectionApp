import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const MusicDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <Text>{props.music.title}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.music.title}</Text>
      </CardItem>
    </Card>
  )
};

export default MusicDetail;