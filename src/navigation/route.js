import React from 'react';
import { StyleSheet } from 'react-native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Store } from '../Redux/Store';

import HomePage from '../pages/HomePage/HomePage';
import SecondPage from '../pages/SecondPage/SecondPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ConfirmEmailPage from '../pages/ConfirmEmailPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import NewPasswordPage from '../pages/NewPasswordPage';

import Feed from '../pages/FeedPage/Feed';
import Notifications from '../pages/FeedPage/Notifications';
import AddPost from '../pages/FeedPage/AddPost';
import Activity from '../pages/FeedPage/Activity';
import Profile from '../pages/FeedPage/Profile';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabs = ()=> {
    return (
        <Tab.Navigator
           // initialRouteName="Feed"
            screenOptions={{
              //  tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                   // tabBarIcon: ({ color, size }) => (
                   //     <MaterialCommunityIcons name="home" color={color} size={26} />
                   // ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notifications',
                    //tabBarIcon: ({ color, size }) => (
                     //   <MaterialCommunityIcons name="bell" color={color} size={26} />
                   // ),
                   // tabBarBadge: 3,
                }}
            />
          {/***
           * <Tab.Screen
                name="AddPost"
                component={AddPost}
                options={{
                    tabBarLabel: 'AddPost',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="image-plus" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="person-outline" color={color} size={26} />
                    )
                }}
            />
           */}
            
        </Tab.Navigator>
    )
}

/*const TabBarStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: 'row',
        borderTopColor: "grey",
        borderTopWidth: 1,
    },
    tab: {
        height: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    label: {
      
        marginLeft: 12,
        color: "blue",
    },
});*/


const Navigation = () => {
    return (
        // Provider makes the Redux store available to any nested components that need to access the Redux store
        // NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment
       
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="toSignIn" component={SignInPage} />
                    <Stack.Screen name="toSignUp" component={SignUpPage} />
                    <Stack.Screen name="toForgotPassword" component={ForgotPasswordPage} />
                    <Stack.Screen name="toNewPassword" component={NewPasswordPage} />
                    <Stack.Screen name="toConfirmEmail" component={ConfirmEmailPage} />
                    <Stack.Screen name="toMenu" component={SecondPage} />
                    <Stack.Screen name="toEverywhere" component={MyTabs} />

                </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});

export default Navigation;