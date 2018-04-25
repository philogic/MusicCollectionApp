import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      { props.children }
    </View>
  )
};

export default Card;

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Android
    elevation: 2
  },
};