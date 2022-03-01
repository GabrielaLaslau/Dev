import React from "react";
import {
   
    View,
    Text,
    Image,
} from 'react-native';

import styles from './SignUpPage.styles';
import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';
import FormTextButton from '../../components/FormTextButton';
import Logo from '../../../assets/images/Logo_1.jpg';
import { ScrollView } from "react-native-gesture-handler";
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const SignUpPage = ({ navigation }) => {

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('Password');

    const onRegisterPressed = () => {
        console.log(data);
        navigation.navigate("toMenu");
    }

    const onSignInPressed = () => {
        navigation.navigate('toSignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image source={Logo} style={styles.logoStyle} />
                <Text style={styles.textStyleIn}>
                    Welcome,
                </Text>
                <Text style={styles.textStyle}>
                    sign up to continue
                </Text>

                <FormInput
                    name="E-mail"
                    control={control}
                    placeholder="E-mail"
                    rules={{
                        required: 'The e-mail is required!',
                        pattern: {
                            value: EMAIL_REGEX, message: 'The e-mail is invalid!'
                        }
                    }}
                />

                <FormInput
                    name="Username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'The username is required!',
                        minLenght: {
                            value: 7,
                            message: 'The username should be al least 7 characters long.',
                        },
                        maxLenght: {
                            value: 15,
                            message: 'The username should be al maximum 15 characters long.',
                        },
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
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <FormTextButton
                    text="Have an account? Sign In"
                    onPress={onSignInPressed}
                />
            </View>
        </ScrollView>
    )
}

export default SignUpPage;