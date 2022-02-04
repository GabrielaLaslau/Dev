import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


const ConfirmEmailPage = ( {navigation} ) => {

    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
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
                Confirm your e-mail
            </Text>

            <CustomInput
                placeholder="Enter your code"
                value={code}
                setValue={setCode}
            />

            <CustomButton text="Confirm" onPress={onConfirmPressed} />
             
            <CustomButton 
            text="Resend code" 
            onPress={onResendPressed}
             />
             
             <CustomButton 
            text="Back to Sign in" 
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

export default ConfirmEmailPage;