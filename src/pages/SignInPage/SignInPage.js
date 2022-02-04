import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
} from 'react-native';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const SignInPage = ( {navigation} ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    }
    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }
    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");
    }
    const { height } = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Text>
                Sign In
            </Text>

            <CustomInput
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton 
            text="Sign in" 
            onPress={onSignInPressed}
            />
            <CustomButton
                text="Forgot password?"
                onPress={() => navigation.navigate('toForgotPassword')}
                type="TERTIATY"
            />
            <CustomButton
                text="Don't have an account? Create one"
                onPress={() => navigation.navigate('toSignUp')}
                type="TERTIATY"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#2C3539',
    },
});

export default SignInPage;