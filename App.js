import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import SettingScreen from "./Screens/SettingsScreen";
import ContactsScreen from "./Screens/ContactsScreen";
import ShoppingScreen from "./Screens/ShoppingScreen";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'purple',
        tabBarActiveBackgroundColor:'greenyellow'
      }}
      >
      

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'Inicio', tabBarIcon:({color, size})=>
          (
            <Ionicons name="home" color={'orange'} size={30} />
          )
        
        }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{title:'Configuracion', tabBarIcon:({color, size})=>
          (
            <Ionicons name="settings" color={'blue'} size={30} />
          )
        }}
        />

        <Tab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{title:'Contactos', tabBarIcon:({color, size})=>
          (
            <Ionicons name="person" color={'green'} size={30} />
          )
        }}
        />

        <Tab.Screen
          name="Shoppe"
          component={ShoppingScreen}
          options={{title:'Tienda', tabBarIcon:({color, size})=>
          (
            <Ionicons name="cart" color={'purple'} size={30} />
          )
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}



