import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Button = ({ whenPressed, children }) => {
  const { ButtonStyle, ButtonTextStyle } = styles;
  return (
    <TouchableOpacity onPress={whenPressed} style={ButtonStyle}>
      <Text style={ButtonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

export default Button;
