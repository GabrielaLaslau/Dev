import React,{ useState, useEffect } from 'react';
import HomePage from './src/pages/HomePage/HomePage';
import SecondPage from './src/pages/SecondPage/SecondPage';
import Camera from './src/pages/Camera/Camera';
import { Camera } from 'expo-camera';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
       
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen
               name="Home"
               component={HomePage}
               options={{headerShown:false}}
               />
               <Stack.Screen 
               name="Menu"
               component={SecondPage}
               options={{headerShown:false}}
               />
               <Stack.Screen 
               name="Cam"
               component={Camera}
               options={{headerShown:false}}
               />
           </Stack.Navigator>
       </NavigationContainer>
    )
}