import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerText, headerView } = styles;
  return (
    <View style={headerView}>
      <Text style={headerText}>{props.headerText}</Text>
    </View>
  )
};

const styles = {
  headerView: {
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // IOS only
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    // Android only
    elevation: 3
  },
  headerText: {
    fontSize: 20
  }
};

export default Header;