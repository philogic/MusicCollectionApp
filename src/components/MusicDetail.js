import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
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
        <Button whenPressed={() => Linking.openURL(url)}/>
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
  },
  bigImageStyle: {
    height: 350,
    flex: 1,
    width: null
  }
};

export default MusicDetail;