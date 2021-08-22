import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  ScrollView,
  ImageBackground
} from 'react-native';
import LinkToItems from '../components/LinkToItems';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: screen.height*0.1, 
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  headerText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ScrollView>
        <ImageBackground source={require('../assets/images/space.jpg')} resizeMode="cover" style={styles.bgimage}>
          <View style={styles.content}>
            <Text style={styles.headerText}>CHOOSE YOUR TOPIC</Text>         
            <View style={styles.itemsContainer}>
              <LinkToItems 
                name='Films' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'films',
                })
              }
              />
              <LinkToItems 
                name='Characters' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'people',
                })
              }
              />
              <LinkToItems 
                name='Spaceships' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'starships',
                })
              }
              />
              <LinkToItems 
                name='Planets' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'planets',
                })
              }
              />
              <LinkToItems 
                name='Species' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'species',
                })
              }
              />
              <LinkToItems 
                name='Vehicles' 
                onButtonPress={() =>
                navigation.push('Items', {
                  title: 'vehicles',
                })
              }
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Home;