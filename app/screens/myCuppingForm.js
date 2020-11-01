import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image} from "react-native";
import { Container, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Fab } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import createCuppingForm from "../screens/createCuppingForm";
import createForm from '../screens/createCuppingForm';

export default class MyCuppingForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      forms: []
    };
  }

  async componentDidMount() {
    const url = "http://10.0.2.2:2020/db";
    const res = await fetch(url);
    const result = await res.json();
    this.setState({forms: result});
  }

  render(){
    return (
      <Container>
        <Card>
          {this.state.forms.map(form => (
            <CardItem key={form.evaluation_index}>
              <Text>{form.evaluation_index}</Text>
              <Right>
                <Icon name='arrow-forward' style={{}}/>
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
            onPress={() => this.props.navigation.navigate('CreateCuppingForm')}
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