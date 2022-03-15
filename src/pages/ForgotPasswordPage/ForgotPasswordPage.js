import React from "react";
import {
    View,
    Text,
} from 'react-native';

import styles from './ForgotPasswordPage.styles';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';
import FormTextButton from '../../components/FormTextButton';

import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const ForgotPasswordPage = ({ navigation }) => {

    const { control, handleSubmit } = useForm();

    const onSendPress = () => {
        navigation.navigate('toNewPassword');
    }

    const onResendPress = () => {
        console.warn("onResendPressed");
    }

    const onSignInPress = () => {
        navigation.navigate('toSignIn');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.textStyle}>
                Reset your password
            </Text>

            <FormInput
                name="E-mail"
                placeholder="E-mail"
                control={control}
                rules={{
                    pattern: {
                        value: EMAIL_REGEX, message: 'The e-mail is invalid.'
                    }
                }}
            />

            <FormTextButton
                text="Resend an e-mail"
                onPress={handleSubmit(onResendPress)}
            />

            <FormClickButton
                text="SEND"
                onPress={handleSubmit(onSendPress)}
            />

            <FormClickButton
                text="Back to Sign In"
                onPress={handleSubmit(onSignInPress)}
            />

        </View>
    )
}

export default ForgotPasswordPage;