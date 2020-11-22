import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, TextInput} from "react-native";
import { Container, Footer, Text, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Input, Item, Content } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import fetch from "node-fetch";

import { DATABASE_URL } from "../../conf";

export default class CreateCuppingForm extends Component{
  state = {
    form: {
      form_name: '',
      fragrance: '',
      flavor: '',
      afterTaste: '',
      acidity: '',
      bodiness: '',
      uniformity: '',
      balance: '',
      cleanCup: '',
      sweetness: '',
      overall: '',   }
  }


  async addForm() {
    const {mode, id} = this.props.route.params;
    const form = {
      ...this.state.form,
      // 임시 유저
      user_num: 1
    };
    try {
      let url = '';
      if (mode == 'add') {
        url = `${DATABASE_URL}coffee/add`;
      } else if (mode == 'edit') {
        url = `${DATABASE_URL}coffee/edit`;
      }

      const res = await fetch(url, {
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
    } catch (error) {
      console.error(error);
    } finally {
      this.props.navigation.goBack();
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      const {mode, id} = this.props.route.params;
      if (mode == 'edit') {
        try {

          const res = await fetch(DATABASE_URL + 'coffee/getFormVal',
               {method: 'post',  headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id})
                });
          let result = await res.json();
          console.log("get jsonform value ok");
          this.setState({form: result[0]});
          console.log(this.state);


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
          bodiness: '',
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

  textValue(value) {
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "number") {
      return value.toString();
    } else {
      return "";
    }
  }

  render(){
    return (
      <Container>
        <Content>
          <Item regular>
          <Input
          placeholder='Name'
          value={this.textValue(this.state.form.form_name)}
          onChangeText= {(text) => this.onChangeText("form_name", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Fragrance'
          value={this.textValue(this.state.form.fragrance)}
          onChangeText= {(text) => this.onChangeText("fragrance", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Flavor'
          value={this.textValue(this.state.form.flavor)}
          onChangeText= {(text) => this.onChangeText("flavor", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Aftertaste'
          value={this.textValue(this.state.form.afterTaste)}
          onChangeText= {(text) => this.onChangeText("afterTaste", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Acidity'
          value={this.textValue(this.state.form.acidity)}
          onChangeText= {(text) => this.onChangeText("acidity", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Bodiness'
          value={this.textValue(this.state.form.bodiness)}
          onChangeText= {(text) => this.onChangeText("bodiness", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Uniformity'
          value={this.textValue(this.state.form.uniformity)}
          onChangeText= {(text) => this.onChangeText("uniformity", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Balance'
          value={this.textValue(this.state.form.balance)}
          onChangeText= {(text) => this.onChangeText("balance", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Cleanup'
          value={this.textValue(this.state.form.cleanCup)}
          onChangeText= {(text) => this.onChangeText("cleanCup", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Sweetness'
          value={this.textValue(this.state.form.sweetness)}
          onChangeText= {(text) => this.onChangeText("sweetness", text)}/>
          </Item>
          <Item regular>
          <Input
          placeholder='Over All'
          value={this.textValue(this.state.form.overall)}
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