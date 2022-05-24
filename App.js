import React from 'react';
import Navigation from './src/navigation/route';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/route';

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </Provider>
    )
}