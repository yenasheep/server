import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, Fab, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container } from 'native-base';
/*
export default class BoardListScreen extends  Component{
  render() {
    const { data } = this.props; // 피드 항목 데이터
    const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
    return (
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: `` }} />
                <Body>
                  <Text>{data.author}</Text>
                  <Text note>{new Date(data.created).toDateString()}</Text>
                </Body>
              </Left>
            </CardItem>
            {
              image && image.length ?
              <CardItem cardBody>
                <Image 
                  source={{ uri: image[0] }} 
                  style={{ height:200, width:null, flex: 1 }} />
              </CardItem> : null
            }
            <CardItem style={{ height: 20 }}>
              <Text>{ data.active_votes.length } likes</Text>
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight:'900'}}>{ data.title }</Text>
            </CardItem>
            <CardItem>
              <Text>
              { data.body.replace(/\n/g,' ').slice(0, 200) }
              </Text>
            </CardItem>
            <CardItem style={{ height:45 }}>
              <Left>
                <Button transparent>
                  <Icon name='ios-heart' style={{ color:'black', marginRight: 5 }}/> 
                  <Text>{ data.active_votes.length }</Text>
                </Button>
                <Button transparent>
                  <Icon name='ios-chatbubbles' style={{ color:'black', marginRight: 5 }}/>
                  <Text>{ data.children }</Text>
                </Button>
                <Button transparent>
                  <Icon name='ios-send' style={{ color:'black' }}/>
                </Button>
              </Left>
              <Right>
                <Text>{ data.pending_payout_value }</Text>
              </Right>
            </CardItem>
        </Card>
    );
  }
}
*/

export default class CardCompnent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  render(){
    
    return (
      <Container>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: '' }} />
            <Body>
              <Text>구준</Text>
              <Text note>Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{ uri: '' }} 
            style={{ height:200, width:null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height:45 }}>
          <Left>
            <Button transparent>
              <Icon name='thumbs-up' style={{ color:'black' }}/>
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color:'black' }}/>
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{ fontWeight:'900'}}>구준</Text>
             {"\t"} 텍스트
          </Text>
        </CardItem>
      </Card>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.props.navigation.navigate('CreateFeed')}>
        <Icon name="share" />
      </Fab>      
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});