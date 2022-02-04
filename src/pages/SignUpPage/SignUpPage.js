import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


const SignUpPage = ( {navigation} ) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    }
    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    }

    return (
        <View style={styles.root}>
            <Text>
                Sign Up/ Create an account
            </Text>

            <CustomInput
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput
                placeholder="Confirm Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />

            <CustomButton 
            text="Have an account? Sign in" 
            onPress={() => navigation.navigate('toSignIn')}
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

export default SignUpPage;