/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,  
  ActivityIndicator,
  ImageBackground,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RowSeparator } from '../components/RowItem';
import KeySingle from '../components/KeySingle';
import KeyList from '../components/KeyList';
import callApi from '../helpers/APIcalls';
import checkKey from '../helpers/checkKey';
import displayItem from '../helpers/displayItem';
import itemChecker from '../helpers/itemChecker';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  waiting: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  container: {    
    flex: 1,
    backgroundColor: colors.white, 
    marginTop: screen.height*0.1,
  },
});


const ItemCard = (props) => {
  const [filteredItem, setFilteredItem] = useState(null);
  const [keys, setKeys] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const {navigation, route, getItem} = props;
  const { url } = route.params;
  
  useEffect(() => {
    (async () => {
      try {
       const data = await getItem(null, url, null);
       const keysNeeded = displayItem(data);
       setKeys(keysNeeded);
       const filtered = await itemChecker(data, keysNeeded);
       setFilteredItem(filtered);
       setIsPending(false);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);
  
  return (    
    <View style={styles.container} key={Date.now()}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/space.jpg')} resizeMode="cover" style={styles.bgimage}>
        {isPending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
      ):(
        <FlatList
          data={keys}
          renderItem={({ item, index }) => {
            
          return (
            (checkKey(item, filteredItem[1]) 
              ? <KeyList key={Date.now()} value={item} object={filteredItem[0]} navigation={navigation} />
              : <KeySingle key={index} item={props.items.item} value={item} />
            )
          );
        }}
          keyExtractor={(key) => key}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      )}
      </ImageBackground>
    </View>
  );
};

ItemCard.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    item: PropTypes.object,
  }).isRequired,
  getItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    item: state.items.item,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItem: callApi,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);