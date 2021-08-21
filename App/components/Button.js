import React from 'react';
import { TouchableOpacity,  StyleSheet, Text, Dimensions } from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: 'grey',
    padding:10,
    width: screen.width * 0.55,
    borderRadius:5,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};