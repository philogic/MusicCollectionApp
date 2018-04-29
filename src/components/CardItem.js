import React from 'react';
import { View } from 'react-native';
import styles from '../styles'

const CardItem = (props) => {
  return(
    <View style={styles.cardItemStyle}>
      {props.children}
    </View>
  )
};

export default CardItem;
