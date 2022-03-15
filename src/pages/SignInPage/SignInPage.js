import React from "react";
import {
    View,
    Text,
    useWindowDimensions,
    Image,
    ScrollView,
} from 'react-native';

import styles from './SignInPage.styles';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';
import FormTextButton from '../../components/FormTextButton';
import SocialButton from '../../components/SocialButton';

import Logo from '../../../assets/images/Logo_1.jpg';

import { useForm } from 'react-hook-form';

const SignInPage = ({ navigation }) => {

    const { height } = useWindowDimensions();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPress = data => {
        console.log(data);
        navigation.navigate('toMenu');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate('toForgotPassword')
    }

    const onSignUpPress = () => {
        navigation.navigate('toSignUp')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={styles.logoStyle}
                    resizeMode="contain"
                />

                <Text style={styles.textStyleIn}>
                    Welcome back,
                </Text>
                <Text style={styles.textStyle}>
                    sign in to continue
                </Text>

                <FormInput
                    name="Username"
                    placeholder="Username"
                    control={control}
                    rules={{ required: 'The username is required!' }}
                />

                <FormInput
                    name="Password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'The password is required!',
                        minLenght: {
                            value: 7,
                            message: 'The password should be al least 7 characters long',
                        },
                    }}
                />

                <FormTextButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPress}
                    type="TERTIATY"
                />

                <FormClickButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPress)}
                />

                <SocialButton
                    buttonTitle="Sign Up with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => { }}
                />

                <SocialButton
                    buttonTitle="Sign Up with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => { }}
                />

                <FormTextButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIATY"
                />

            </View>
        </ScrollView>
    )
}

export default SignInPage;