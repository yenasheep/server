import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from "react-native";

const CleanCupScreen = () => {
  return (
    <ScrollView style= {styles.container}>

      <View style= {styles.form}>
        <Image
          style={{height: 400,width:'100%',resizeMode:'contain',}}
          //source= {require('../images/CleanCup_aroma.png')}
        />
      </View>
      <View style= {styles.inform}>
        <Text style= {{ fontSize: 20, color: 'white'}}>
          Defect의 맛, 잡미
            
        </Text>
      </View>

    </ScrollView>
  );
};

export default CleanCupScreen;

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