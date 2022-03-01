import React from 'react';
import { StyleSheet } from 'react-native';

import HomePage from '../../src/pages/HomePage/HomePage';
import SecondPage from '../../src/pages/SecondPage/SecondPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Store } from '../../src/Redux/Store';

import SignInPage from '../../src/pages/SignInPage';
import SignUpPage from '../../src/pages/SignUpPage';
import ConfirmEmailPage from '../../src/pages/ConfirmEmailPage';
import ForgotPasswordPage from '../../src/pages/ForgotPasswordPage';
import NewPasswordPage from '../../src/pages/NewPasswordPage';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen name="Home" component={HomePage}/>
                    <Stack.Screen name="toSignIn" component={SignInPage}/>
                    <Stack.Screen name="toSignUp" component={SignUpPage}/>
                    <Stack.Screen name="toForgotPassword" component={ForgotPasswordPage}/>
                    <Stack.Screen name="toNewPassword" component={NewPasswordPage}/>
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailPage}/>
                    <Stack.Screen name="toMenu"component={SecondPage}/>

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({});

export default Navigation;