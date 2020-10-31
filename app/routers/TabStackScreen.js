import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import cuppingform from "../screens/cuppingform";
import BoardListScreen from "../screens/BoardListScreen";
import MyCuppingForm from "../screens/myCuppingForm";
import Fragrance from "../screens/Fragrance";
import MenuButton from "./MenuButton";
import LoginStackScreen from "../screens/LoginScreen";
import Flavor from "../screens/Flaovor";
import Acidity from "../screens/Acidity";
import Aftertaste from "../screens/Aftertaste";
import Sweetness from "../screens/Sweetness";
import Body from "../screens/Body";
import Balance from "../screens/Balance";
import CleanCup from "../screens/CleanCup";
import Uniformity from "../screens/Uniformity";
import OverAll from "../screens/Overall";
import { Container, Text, Card, CardItem, Thumbnail, Left, Right, Button, Icon } from 'native-base';
import CreateCuppingForm from "../screens/createCuppingForm";
import CreateFeed from "../screens/CreateFeed";

const Tab = createBottomTabNavigator();

const form = createStackNavigator();
const formScreen = ({ navigation }) => {
  return (
    <form.Navigator>
      <form.Screen
        name="커핑폼 작성법"
        component={cuppingform}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
      <form.Screen
        name="Fragrance"
        component={Fragrance}
        options={{}}
      />

      <form.Screen
        name="Flavor"
        component={Flavor}
        options={{}}
      />

      <form.Screen
        name="Acidity"
        component={Acidity}
        options={{}}
      />

      <form.Screen
        name="Aftertaste"
        component={Aftertaste}
        options={{}}
      />

      <form.Screen
        name="Sweetness"
        component={Sweetness}
        options={{}}
      />

      <form.Screen
        name="Body"
        component={Body}
        options={{}}
      />

      <form.Screen
        name="Balance"
        component={Balance}
        options={{}}
      />

      <form.Screen
        name="CleanCup"
        component={CleanCup}
        options={{}}
      />

      <form.Screen
        name="Uniformity"
        component={Uniformity}
        options={{}}
      />

      <form.Screen
        name="Overall"
        component={OverAll}
        options={{}}
      />

    </form.Navigator>
  );
};

const BoardStack = createStackNavigator();
function BoardStackScreen(){
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen
        name="게시판"
        component={BoardListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
      <BoardStack.Screen
        name="CreateFeed"
        component={CreateFeed}
        option={{}}
      />
    </BoardStack.Navigator>
  );
}

const MemoryStack = createStackNavigator();
function MemoryStackScreen(){
  return (
    <MemoryStack.Navigator>
      <MemoryStack.Screen
        name="내 커핑폼"
        component={MyCuppingForm}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
      <MemoryStack.Screen
        name="CreateCuppingForm"
        component={CreateCuppingForm}
        options={{}} 
      />
    </MemoryStack.Navigator>
  );
}


function TabStackScreen(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="커핑폼" component={formScreen} />
      <Tab.Screen name="게시판" component={BoardStackScreen} />
      <Tab.Screen name="내 커핑폼" component={MemoryStackScreen} />
    </Tab.Navigator>
  );
}

export default TabStackScreen;
