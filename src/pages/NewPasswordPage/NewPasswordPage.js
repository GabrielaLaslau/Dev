import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const NewPasswordPage = ( {navigation} ) => {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn("onSubmitPressed");
    }
    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    }
    return (
        <View style={styles.root}>
            <Text>
                Reset your password
            </Text>

            <CustomInput
                placeholder="Code*"
                value={code}
                setValue={setCode}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput
                placeholder="Confirm password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry
            />

            <CustomButton text="SUBMIT" onPress={onSubmitPressed} />
            <CustomButton 
            text="Back to Sign In" 
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

export default NewPasswordPage;