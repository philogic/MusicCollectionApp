import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import styles from '../styles.js';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';


const MusicDetail = ({ music }) => {
  const { title, artist, image, thumbnail_image, url } = music;
  const { imageStyle,
          imageContainerStyle,
          headerContentStyle,
          headerTextStyle,
          bigImageStyle
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
      <CardItem>
        <Image source={{uri: image}} style={bigImageStyle}/>
      </CardItem>
      <CardItem>
        <Button whenPressed={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardItem>
    </Card>
  )
};

export default MusicDetail;