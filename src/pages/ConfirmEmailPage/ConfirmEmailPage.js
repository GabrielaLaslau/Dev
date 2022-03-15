import React from "react";
import {
    View,
    Text,
} from 'react-native';

import styles from './ConfirmEmailPage.styles';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';

import { useForm } from 'react-hook-form';

const ConfirmEmailPage = ({ navigation }) => {

    const { control, handleSubmit } = useForm();

    const onConfirmPress = (data) => {
        console.warn("onConfirmPress");
    }

    const onResendPress = () => {
        console.warn("onResendPress");
    }

    const onSignInPress = () => {
        navigation.navigate("toSignIn");
    }

    return (
        <View style={styles.root}>
            <Text style={styles.textStyleIn}>
                Confirm your e-mail
            </Text>

            <FormInput
                name="Code"
                placeholder="Enter your code"
                control={control}
                rules={{
                    required: "The confirmation code is required!"
                }}
            />

            <FormClickButton
                text="Confirm"
                onPress={handleSubmit(onConfirmPress)}
            />

            <FormClickButton
                text="Resend code"
                onPress={handleSubmit(onResendPress)}
            />

            <FormClickButton
                text="Back to Sign In"
                onPress={handleSubmit(onSignInPress)}
            />

        </View>
    )
}

export default ConfirmEmailPage;