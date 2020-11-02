import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from "react-native";

const AcidityScreen = () => {
  return (
    <ScrollView style= {styles.container}>

      <View style= {styles.form}>
        <Image
          style={{height: 400,width:'100%',resizeMode:'contain',}}
          //source= {require('../images/Acidity_aroma.png')}
        />
      </View>
      <View style= {styles.inform}>
        <Text style= {{ fontSize: 20, color: 'white'}}>
          산미, 산으로부터 나오는 신맛을 평가한다.
        </Text>
      </View>

    </ScrollView>
  );
};

export default AcidityScreen;

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