import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js'

const Header = (props) => {
  const { headerText, headerView } = styles;
  return (
    <View style={headerView}>
      <Text style={headerText}>{props.headerText}</Text>
    </View>
  )
};

export default Header;