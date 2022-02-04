import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const ForgotPasswordPage = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const onSendPressed = () => {
        console.warn("onSendPressed");
    }
    const onResendPressed = () => {
        console.warn("onResendPressed");
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
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
            <CustomButton 
            text="Resend an e-mail" 
            onPress={onResendPressed} 
            />
            <CustomButton 
            text="SEND" 
            onPress={() => navigation.navigate('toNewPassword')}
            />
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

export default ForgotPasswordPage;