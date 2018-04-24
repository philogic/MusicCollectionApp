import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { headerText, headerView } = styles;
  return (
    <View style={headerView}>
      <Text style={headerText}>Music!</Text>
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
    shadowOpacity: 0.2
  },
  headerText: {
    fontSize: 20
  }
};

export default Header;