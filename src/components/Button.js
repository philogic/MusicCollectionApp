import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed }) => {
  const { ButtonStyle, ButtonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={whenPressed} style={ButtonStyle}>
      <Text style={ButtonTextStyle}>Click Me!!!</Text>
    </TouchableOpacity>
  )
};

const styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  ButtonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;