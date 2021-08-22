/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
});

const KeySingle = (props) => {
  const {item, value} = props;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {value}
        :
        {' '}
        {item[value]}
      </Text>
    </View>
  );
}

export default KeySingle;