import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';
import * as Facebook from 'expo-facebook';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import DrawerStackScreen from '../routers/DrawerStackScreen';



export default class LoginScreen extends React.Component{

    static navigationOptions = {
        header: null,
    };


  facebookLogIn = async () => {

    try {
       await Facebook.initializeAsync({
                  appId : '1458719947661199'
                }
              );
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
              });
       if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch("https://graph.facebook.com/me?access_token=${token}");
            alert('Logged in!', `Hi ${(await response.json()).name}!`);
            this.props.navigation.navigate('Drawer');
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
  }

  logout = () => {
    setLoggedinStatus(false);
    setUserData(null);
    setImageLoadStatus(false);
  }



    _doLogin(){
        // do something
        this.props.navigation.replace('TabNavigator')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Cupping Form</Text>

                </View>
                <Image
                    style= {{height:'30%',width:'100%',resizeMode:'contain', justifyContent: 'center'}}
                    source= {require('./mug_coffee_PNG16883.png')} />
                <View style={styles.container}>
                        <TouchableOpacity style={styles.loginBtn} onPress={this.facebookLogIn}>
                          <Text style={{ color: "#fff" }}>Login with Facebook</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C29F6D',
        paddingLeft: wp('5%'),
        paddingRight: wp('10%'),
        justifyContent: 'center',
    },
    titleArea: {
        width: '100%',
        //height: 300,
        padding: wp('10%'),
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
    },
    title: {
        fontSize: wp('10%'),
    },

    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    button: {
        backgroundColor: "#704800",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})