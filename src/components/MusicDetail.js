import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const MusicDetail = ({ music }) => {
  const { title, artist, thumbnail_image } = music;
  const { imageStyle,
          imageContainerStyle,
          headerContentStyle,
          headerTextStyle
  } = styles;
  return (
    <Card>
      <CardItem>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle}
            source={{ uri: thumbnail_image }}/>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
    </Card>
  )
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  }
};

export default MusicDetail;