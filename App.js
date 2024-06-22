/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  LogBox,
 View
} from 'react-native';



import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { stack } from './src/utils/CommonString';
import LoginScreen from './src/screens/LoginScreen';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications
const Stack = createStackNavigator();

function AppStack(){
  return(
   <NavigationContainer>
   <Stack.Navigator initialRouteName={stack.LOGIN_SCREEN} screenOptions={{headerShown:false}}>
   
   <Stack.Screen name={stack.LOGIN_SCREEN} component={LoginScreen} />
 </Stack.Navigator>
 </NavigationContainer>
  )
 }

function App() {
  

  return (
    <View style={{flex:1}}>
      <AppStack/>
    </View>
  );
}



export default App;
