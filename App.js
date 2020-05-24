import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View ,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScene from './src/screens/home/HomeScene'
import ProfileScene from './src/screens/ProfileScene'
import SearchScene from './src/screens/SearchScene'
import LikeScene from './src/screens/LikeScene';
import MessageScene from './src/screens/home/MessagesScene';

const Tab = createBottomTabNavigator()

const HomeStack = createStackNavigator()
const HomeStackScreen = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScene} />
      <HomeStack.Screen name='Messages' component={MessageScene} />
    </HomeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={ProfileScene} />
    </ProfileStack.Navigator>
  )
}

const SearchStack = createStackNavigator()
const SearchStackScreen = () => {
  return(
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={SearchScene} />
    </SearchStack.Navigator>
  )
}

const LikeStack = createStackNavigator()
const LikeStackScreen = () => {
  return(
    <LikeStack.Navigator>
      <LikeStack.Screen name='Like' component={LikeScene} />
    </LikeStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackScreen} options={{title: 'My Home'}} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Like" component={LikeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
