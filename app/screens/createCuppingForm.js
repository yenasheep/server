import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, TextInput} from "react-native";
import { Container, Footer, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Input, Item, Content } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import { DATABASE_URL } from "../../conf";

export default class CreateCuppingForm extends Component{
  state = {
    form: {
      name: '',
      fragrance: '',
      flavor: '',
      aftertaste: '',
      acidity: '',
      body: '',
      uniformity: '',
      balance: '',
      cleancup: '',
      sweetness: '',
      overall: '',
    }
  }

  async addForm() {
    let form = {};
    const nameMap = {
      name: "form_name",
      fragrance: "fragrance",
      aftertaste: "afterTaste",
      cleancup: "cleanCup"
    };

    // this.state를 가지고 backend가 이해할 수 있도록 form 변수에다가 변환.
    for (const key in this.state.form) {
      const convertedKey = (typeof nameMap[key] !== "undefined") ? nameMap[key] : key;
      form[convertedKey] = this.state.form[key];
    }
    // 임시 유저
    form.user_num = 0;
    
    try {
      const res = await fetch(`${DATABASE_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.status >= 400 && res.status < 600) {
        const err = await res.text();
        throw err;
      }

      this.props.navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  onChangeText(field, text) {
    this.setState(state => {
      let form = {...state.form};
      form[field] = text;
      return {form};
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Item regular>
          <Input 
          placeholder='Name'
          onChangeText= {(text) => this.onChangeText("name", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Fragrance' 
          onChangeText= {(text) => this.onChangeText("fragrance", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Flavor' 
          onChangeText= {(text) => this.onChangeText("flavor", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Aftertaste' 
          onChangeText= {(text) => this.onChangeText("aftertaste", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Acidity' 
          onChangeText= {(text) => this.onChangeText("acidity", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Body' 
          onChangeText= {(text) => this.onChangeText("body", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Uniformity' 
          onChangeText= {(text) => this.onChangeText("uniformity", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Balance' 
          onChangeText= {(text) => this.onChangeText("balance", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Cleanup' 
          onChangeText= {(text) => this.onChangeText("cleancup", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Sweetness' 
          onChangeText= {(text) => this.onChangeText("sweetness", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Over All' 
          onChangeText= {(text) => this.onChangeText("overall", text)}/>
          </Item>
        </Content>
        <Footer>
          {/* 참고: https://stackoverflow.com/questions/45998744/react-this-state-is-undefined */}
          <TouchableOpacity 
          onPress={this.addForm.bind(this)}
          >
            <Text>저장</Text>
          </TouchableOpacity>
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
