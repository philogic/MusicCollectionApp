import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      { props.children }
    </View>
  )
};

export default Card;
