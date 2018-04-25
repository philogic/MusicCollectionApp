import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  return(
    <View style={styles.cardItemStyle}>
      {props.children}
    </View>
  )
};

export default CardItem;

const styles = {
  cardItemStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
}