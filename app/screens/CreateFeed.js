import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Fab, Form, CardItem, Textarea, Footer, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'
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
                        <Textarea rowSpan={2} bordered placeholder="제목"
                        onChangeText= {(text) => this.setState({listTitle: text})}/>
                    </Form>
                    <Form>
                        <Textarea rowSpan={15} bordered placeholder="내용" 
                        onChangeText= {(text) => this.setState({listText: text})}/>
                    </Form>
                </Content>
                <Footer>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    >
                        <Text>글쓰기</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        );
    }
}