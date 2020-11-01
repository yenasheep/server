import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, TextInput} from "react-native";
import { Container, Footer, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Input, Item, Content } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import { DATABASE_URL } from "../../conf";

export default class CreateCuppingForm extends Component{
  state = {
    form: {
      form_name: '',
      fragrance: '',
      flavor: '',
      afterTaste: '',
      acidity: '',
      body: '',
      uniformity: '',
      balance: '',
      cleanCup: '',
      sweetness: '',
      overall: '',
    }
  }

  async addForm() {
    const form = {
      ...this.state.form,
      // 임시 유저
      user_num: 0
    };    
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

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      const {mode, id} = this.props.route.params;
      if (mode == 'edit') {
        try {
          const res = await fetch(`${DATABASE_URL}/${id}`);
          const result = await res.json();
          this.setState({form: result});
        } catch (error) {
          console.error(error);
        }
      } else {
        this.setState({form: {
          form_name: '',
          fragrance: '',
          flavor: '',
          afterTaste: '',
          acidity: '',
          body: '',
          uniformity: '',
          balance: '',
          cleanCup: '',
          sweetness: '',
          overall: '',
        }});
      }
    })
  }

  componentWillUnmount() {
    this._unsubscribe();
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
          value={this.state.form.form_name}
          onChangeText= {(text) => this.onChangeText("form_name", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Fragrance' 
          value={this.state.form.fragrance.toString()}
          onChangeText= {(text) => this.onChangeText("fragrance", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Flavor' 
          value={this.state.form.flavor.toString()}
          onChangeText= {(text) => this.onChangeText("flavor", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Aftertaste' 
          value={this.state.form.afterTaste.toString()}
          onChangeText= {(text) => this.onChangeText("afterTaste", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Acidity' 
          value={this.state.form.acidity.toString()}
          onChangeText= {(text) => this.onChangeText("acidity", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Body' 
          value={this.state.form.body.toString()}
          onChangeText= {(text) => this.onChangeText("body", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Uniformity' 
          value={this.state.form.uniformity.toString()}
          onChangeText= {(text) => this.onChangeText("uniformity", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Balance' 
          value={this.state.form.balance.toString()}
          onChangeText= {(text) => this.onChangeText("balance", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Cleanup' 
          value={this.state.form.cleanCup.toString()}
          onChangeText= {(text) => this.onChangeText("cleanCup", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Sweetness' 
          value={this.state.form.sweetness.toString()}
          onChangeText= {(text) => this.onChangeText("sweetness", text)}/>
          </Item>
          <Item regular>
          <Input 
          placeholder='Over All' 
          value={this.state.form.overall.toString()}
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
