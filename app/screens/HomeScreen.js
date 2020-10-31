import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const goToDetail = (navigation) => {
    navigation.navigate("details");
  };

  return (
    <>
      <View>
        <Text> List </Text>
      </View>
      <View>
        <Button onPress={goToDetail} title="How to make cupping-form"></Button>
      </View>
    </>
  );
};

export default HomeScreen;
