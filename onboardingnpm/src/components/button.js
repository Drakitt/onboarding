import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { color } from 'react-native-reanimated';

const button = ({titleButton, onPress, isLoading,color,color2,disable,type}) => {
  const loader = () => {
    return <ActivityIndicator animating={isLoading} />;
  };
  const button = () => {
    return (
      <TouchableOpacity 
      onPress={onPress}>
        <Text style={[styles.text,{color:color2,fontWeight:type,display:disable}]} >{titleButton}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={[styles.button,{backgroundColor: color}]}>{isLoading ? loader() : button()}</View>;
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
  },
  text: {
    width: 100,
    textAlign: 'center',
    height: 20,
    
  },
});

export default button;