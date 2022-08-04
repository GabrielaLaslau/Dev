import React from 'react';

import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/route';

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </Provider>
    )
}