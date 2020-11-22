//import { Separator } from "native-base";
import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from "react-native";


const Separator = () => {
  <View style= {styles.separator} />
};

const formListScreen = ({ navigation }) => {
  return (
    <ScrollView style= {styles.container}>
      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Fragrance")}
      >
        <Text style= {styles.text}>Fragrance</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Flavor")}
      >
        <Text style= {styles.text}>Flavor</Text>
      
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Acidity")}
      >
        <Text style= {styles.text}>Acidity</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Aftertaste")}
      >
        <Text style= {styles.text}>Aftertaste</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Sweetness")}
      >
        <Text style= {styles.text}>Sweetness</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Bodiness")}
      >
        <Text style= {styles.text}>Bodiness</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Balance")}
      >
        <Text style= {styles.text}>Balance</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("CleanCup")}
      >
        <Text style= {styles.text}>Clean Cup</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Uniformity")}
      >
        <Text style= {styles.text}>Uniformity</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.list}
      onPress={() => navigation.push("Overall")}
      >
        <Text style= {styles.text}>Overall</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default formListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
  },

  list: {
    flex: 1,
    backgroundColor : '#A06641',
    marginBottom: 5
  },

  text: {
    fontSize: 50,
    textAlign: 'right'
  },
});