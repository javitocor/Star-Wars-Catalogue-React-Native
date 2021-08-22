import React, { useEffect } from 'react';
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
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeparator } from '../components/RowItem';
import {Button} from '../components/Button';
import callApi from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  waiting: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

const Items = (props) => {
  const {navigation, route, getAllItems} = props;
  const { title } = route.params;

  useEffect(() => {
    getAllItems(title, null, null);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white, 
        marginTop: screen.height*0.1, 
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/space.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.items.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
      ):(
        <FlatList
          data={props.items.itemsList}
          renderItem={({ item }) => {

          return (
            <RowItem
              title={item.title ? item.title : item.name}
              onPress={() => {
                navigation.navigate('ItemCard', {
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
          );
        }}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <RowSeparator />}
        />
      )}      
        {props.items.next === null ? (
          <View />
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            text="Show More"
            onPress={async () => 
                    getAllItems(null, props.items.next, 'update')
                }
          />
        </View>
      )}
      </ImageBackground>
    </View>
  );
};

Items.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    itemsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
    next: state.items.next
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: callApi,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);