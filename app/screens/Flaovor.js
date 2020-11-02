import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from "react-native";

const flavorScreen = () => {
  return (
    <ScrollView style= {styles.container}>

      <View style= {styles.form}>
        <Image
          style={{height: 400,width:'100%',resizeMode:'contain',}}
         //source= {require('../images/flavor_aroma.png')}
        />
      </View>
      <View style= {styles.inform}>
        <Text style= {{ fontSize: 20, color: 'white'}}>
          입안에 커피가 들어왔을때 총체적인 맛과 향
        </Text>
      </View>

    </ScrollView>
  );
};

export default flavorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#C29F6D',
  },

  form: {
    flex: 1,
    backgroundColor : '#C29F6D',
  },

  inform: {
    flex: 2,
    backgroundColor: '#C29F6D',
  }
});