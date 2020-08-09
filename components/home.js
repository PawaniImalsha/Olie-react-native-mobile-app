// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';
import firebase from '../database/firebase';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    Alert.alert(
      'Alert',
      'Are you sure to sign out?',
      [
        {text: 'Yes', onPress: () => {
    console.log("logout")
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
},
{text: 'No', onPress: () => console.log('Signing in'), style: 'cancel'},
  ],
  { 
  cancelable: true 
  }
  );
}  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
      <View style={{flex:1,backgroundColor:'white',
            }}>
        <View style={{...StyleSheet.absoluteFill}}>
                <Image
                source={require('../assets/imageboy.jpg')}
                style={{ flex : 1, width:250,paddingLeft:10 }}
                />
            </View>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});