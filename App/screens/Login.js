import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { authenticateUser } from "../actions/auth";

import colors from '../constants/colors';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({  
  container: {
    flex: 1,    
    height: screen.height * 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: screen.height * 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width * 0.50,
    height: screen.height * 0.30,
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 0,
    paddingVertical:0,
    height: screen.width * 0.1
  },
  input:{
    color: colors.white,
    height: 50,
    width: screen.width * 0.55,
    backgroundColor: 'grey',
    borderRadius:5,
    padding: 5,
  }
});

// const image = { uri: "https://lumiere-a.akamaihd.net/v1/images/background-stars-desktop_00cbf8a9.jpeg?region=0%2C0%2C2048%2C1600" }

const Login = ({navigation, saveUser}) => {
  const [value, setValue] = useState('');
  const [scrollEnabled, setScrollEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <ImageBackground source={require('../assets/images/space.jpg')} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={() => navigation.push('Options')}>
              <Entypo name="cog" size={32} color={colors.white} />
            </TouchableOpacity>
          </SafeAreaView>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image
                source={{uri: 'https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png'}}
                style={styles.logoBackground}
                resizeMode="contain"
              />
              <Text style={styles.textHeader}>Everything you want to know!</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setValue(text)}
                  value={value}
                  placeholder="Insert your Username"
                  placeholderTextColor={colors.white}
                />
                <Button
                  text="Join"
                  onPress={() => 
                    saveUser(value) !==  null ? navigation.navigate('Home', {title: 'Home'}) : Alert.alert('Please add a Username')
                }
                />
                <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

Login.propTypes = {
  saveUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  saveUser:authenticateUser,
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);