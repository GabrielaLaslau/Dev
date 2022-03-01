import React, { useState } from "react";
import {
    View,
    Text,
} from 'react-native';

import styles from './NewPasswordPage.styles';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';

const NewPasswordPage = ({ navigation }) => {

    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn("onSubmitPressed");
    }
    const onSignInPressed = () => {
        navigation.navigate('toSignIn');
    }
    
    return (
        <View style={styles.root}>
            <Text style={styles.textStyle}>
                Reset your password
            </Text>
            <FormInput
                placeholder="Code*"
                value={code}
                setValue={setCode}
            />
            <FormInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <FormInput
                placeholder="Confirm password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry
            />
            <FormClickButton
                text="SUBMIT"
                onPress={onSubmitPressed}
            />
            <FormClickButton
                text="Back to Sign In"
                onPress={onSignInPressed}
            />
        </View>
    )
}

export default NewPasswordPage;