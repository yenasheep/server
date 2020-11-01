import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from "react-native";

const AftertasteScreen = () => {
  return (
    <ScrollView style= {styles.container}>

      <View style= {styles.form}>
        <Image
          style={{height: 400,width:'100%',resizeMode:'contain',}}
          //source= {require('../images/Aftertaste_aroma.png')}
        />
      </View>
      <View style= {styles.inform}>
        <Text style= {{ fontSize: 20, color: 'white'}}>
          Aftertaste와 Aroma의 사전적의미는 '향'입니다.{"\n"}
          Aftertaste는 가루 상태에서의 향기, Aroma는 물에 젖은 상태에서의 향기를 뜻합니다.{"\n"}
          먼저 분쇄가루 가까이에 코를 들이대고 냄새를 맡습니다. 이 때, 컵을 가볍게 두드리면 효과적입니다.
          물을 부은 후 최소 3분 ~ 최대 5분이내에 표면의 커피를 가르며 냄새를 맡습니다. 
          
            
        </Text>
      </View>

    </ScrollView>
  );
};

export default AftertasteScreen;

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