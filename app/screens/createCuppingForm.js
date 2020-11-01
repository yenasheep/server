import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, TextInput} from "react-native";
import { Container, Footer, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Input, Item, Content } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

export default class CreateCuppingForm extends Component{
  state = {
    name: '',
    fragrance: 0,
    flavor: 0,
    aftertaste: 0,
    acidity: 0,
    body: 0,
    uniformity: 0,
    balance: 0,
    cleancup: 0,
    sweetness: 0,
    overall: 0,
  }

  render(){
    return (
      <Container>
        <Content>
          <Item regular>
          <Input 
          placeholder='Name'
          onChangeText= {(text) => this.setState({name: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Fragrance' 
          onChangeText= {(text) => this.setState({fragrance: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Flavor' 
          onChangeText= {(text) => this.setState({flavor: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Aftertaste' 
          onChangeText= {(text) => this.setState({aftertaste: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Acidity' 
          onChangeText= {(text) => this.setState({acidity: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Body' 
          onChangeText= {(text) => this.setState({body: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Uniformity' 
          onChangeText= {(text) => this.setState({uniformity: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Balance' 
          onChangeText= {(text) => this.setState({balance: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Cleanup' 
          onChangeText= {(text) => this.setState({cleancup: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Sweetness' 
          onChangeText= {(text) => this.setState({sweetness: text})}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Over All' 
          onChangeText= {(text) => this.setState({overall: text})}/>
          </Item>
        </Content>
        <Footer>
          <Text>저장</Text>
        </Footer>
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
/*
<Item regular>
<Input 
placeholder='Name'
onChangeText= {(text) => this.setState({name: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Fragrance' 
onChangeText= {(text) => this.setState({fragrance: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Flavor' 
onChangeText= {(text) => this.setState({flavor: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Aftertaste' 
onChangeText= {(text) => this.setState({aftertaste: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Acidity' 
onChangeText= {(text) => this.setState({acidity: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Body' 
onChangeText= {(text) => this.setState({body: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Uniformity' 
onChangeText= {(text) => this.setState({uniformity: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Balance' 
onChangeText= {(text) => this.setState({balance: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Cleanup' 
onChangeText= {(text) => this.setState({cleancup: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Sweetness' 
onChangeText= {(text) => this.setState({sweetness: text})}/>
</Item>
<Item regular>
<Input 
placeholder='Over All' 
onChangeText= {(text) => this.setState({overall: text})}/>
</Item>
*/