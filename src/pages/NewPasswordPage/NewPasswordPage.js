import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import styles from './NewPasswordPage.styles';
import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';

const NewPasswordPage = ({ navigation }) => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('Password');

    const onSubmitPress = () => {
        console.warn("onSubmitPressed");
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
                name="Code"
                placeholder="Code"
                control={control}
                rules={{
                    required: 'The code is required!',
                }}
            />

            <FormInput
                name="Password"
                control={control}
                placeholder="Password"
                secureTextEntry
                rules={{
                    required: 'The password is required!',
                    minLenght: {
                        value: 8,
                        message: 'The password should be al least 8 characters long.',
                    },
                }}
            />

            <FormInput
                name="Confirm-password"
                control={control}
                placeholder="Confirm Password"
                secureTextEntry
                rules={{
                    required: 'The confirm password is required!',
                    validate: value => value == pwd || 'Password do not match!',
                }}
            />

            <FormClickButton
                text="SUBMIT"
                onPress={handleSubmit(onSubmitPress)}
            />

            <FormClickButton
                text="Back to Sign In"
                onPress={handleSubmit(onSignInPress)}
            />
        </View>
    )
}

export default NewPasswordPage;