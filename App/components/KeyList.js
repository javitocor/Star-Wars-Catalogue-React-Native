/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {RowItem} from './RowItem';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: screen.width*1,
  },
  topText: {
    color: colors.text,
    fontSize: 16,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});

const KeyList = (props) => {
  const {object, value} = props;
  const data = object[value];  
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{value.toUpperCase()}</Text>
      {data.length === 0 
      ? <Text style={styles.topText}>No Data</Text>
      : (data.map( (item, index) => (
        <RowItem
          style={{width: '20%'}}
          title={item.title ? item.title : item.name}
          onPress={() => {
                props.navigation.push('ItemCard', {
                  title: item.title ? item.title : item.name,
                  url: item.url
                })
              }}
          rightIcon={
                 (
                   <View style={styles.icon}>
                     <Entypo name="chevron-right" size={20} color={colors.white} />
                   </View>
                )
              }
        />
)))
    }
    </View>

  );
}

export default KeyList;