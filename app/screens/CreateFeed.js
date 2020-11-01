import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, Fab, Form, CardItem, Textarea, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'
import { Camera } from 'expo-camera';

export default class CreateFeed extends Component{
    state = {
        hasPermission: null,
    }

    componentDidMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
      
        console.log(status)
    }
    
    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Textarea rowSpan={20} bordered placeholder="Textarea" />
                    </Form>
                </Content>
            </Container>
        );
    }
}