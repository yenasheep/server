import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Container, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Fab } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import createCuppingForm from "../screens/CreateCuppingForm";
import createForm from '../screens/CreateCuppingForm';

import { DATABASE_URL } from "../../conf";

export default class MyCuppingForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      loading: true,
      forms: []
    };
  }

  async refreshList() {

    const res = await fetch(DATABASE_URL + 'coffee/getForm',
     {method: 'post',  headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user_num: 1})
      });
     if (res.ok) {//http code 200~299
        const result = await res.json();
        console.log('res (get json array) ok');
        this.setState({loading: false, forms: result});

    }
    else{
    alert("HTTP-Error: "+res.json());
    }
   }

  componentDidMount() {
    this.refreshList();
    this._focus = this.props.navigation.addListener('focus', () => {
      this.refreshList();
     });
  this._blur = this.props.navigation.addListener('blur', () => {
        this.setState({loading: true});
     });
   }


  componentWillUnmount() {
    this._focus();
    this._blur();
  }

  render(){
    return (
      this.state.loading ? <ActivityIndicator size="large" color="#999999"/>:
      <Container>
        <Card>
          {this.state.forms.map(form => (
            <CardItem key={form.evaluation_index}>
              <Text>{form.form_name}</Text>
              <Right>
                <Icon name='arrow-forward' style={{}}
                onPress={() => this.props.navigation.navigate('CreateCuppingForm', {mode: 'edit', id: form.evaluation_index})}
                />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('CreateCuppingForm', {mode: 'add'})}
            >
            <Icon name="share" />
        </Fab>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
  }
});