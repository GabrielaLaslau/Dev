import React, { useState } from "react";
import {
    View,
    Text,
} from 'react-native';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';
import { useForm } from 'react-hook-form';

const ConfirmEmailPage = ({ navigation }) => {

    const { control, handleSubmit } = useForm();
    const [code, setCode] = useState('');

    const onConfirmPressed = (data) => {
        console.warn(data);
        navigation.navigate("Home");
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

            <FormInput
                name="code"
                control={control}
                placeholder="Enter your code"
                rules={{
                    required: "The confirmation code is required"
                }}
            />

            <FormClickButton
                text="Confirm"
                onPress={handleSubmit(onConfirmPressed)}
            />

            <FormClickButton
                text="Resend code"
                onPress={onResendPressed}
            />

            <FormClickButton
                text="Back to Sign in"
                onPress={() => navigation.navigate('toSignIn')}
            />

        </View>
    )
}

export default ConfirmEmailPage;