import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Fab, Form, CardItem, Textarea, Footer, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import pickImage from './CameraRoll';
import * as Permissions from 'expo-permissions';

export default class CreateFeed extends Component{    
    
    imagePicker = async () => {
        // expo permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        try {
          if (status === "granted") {
            // pick image
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images, // only images are allowed
            }).catch((error) => console.log(error));
            // canceled process
            if (!result.cancelled) {
              const imageUrl = await this.uploadImageFetch(result.uri);
              this.props.onSend({ image: imageUrl });
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      };

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
                        onChangeText= {(text) => this.setState({listText: text})}
                        />
                        
                    </Form>
                    
                    
                </Content>
                <TouchableOpacity
                        onPress ={() => this.imagePicker()}>
                        <FontAwesome 
                            name="photo" 
                            size={24} 
                            color="green"
                            style= {styles.photo}
                        />
                    </TouchableOpacity>
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

const styles= StyleSheet.create(
    {
        photo:{
            marginLeft : 10
        }
    }
)

//onPress={pickImage}
//{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}