import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

import styles from './SignInPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userConnection } from '../../Redux/Actions';

import FormTextButton from '../../components/FormTextButton';
import SocialButton from '../../components/SocialButton';

import Logo from '../../../assets/images/Logo_1.jpg';

import { useForm } from 'react-hook-form';
import FormClickButton from "../../components/FormClickButton";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const SignInPage = ({ navigation }) => {

    const state = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // chemam actiune de log ce nu exista inca
        dispatch(getUser());
    }, [dispatch]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        formState: { errors },
    } = useForm();

    const onForgotPasswordPress = () => {
        navigation.navigate('toForgotPassword')
    }

    const onSignUpPress = () => {
        navigation.navigate('toSignUp')
    }

    const onPressHandler = async () => {
        console.log('JSON:', '-', email, '-' + password);
        dispatch(userConnection(email, password));
        navigation.navigate('toMenu');
    };

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

                <TextInput
                    style={styles.customInput}
                    name="E-mail"
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.customInput}
                    name="Password"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <FormTextButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPress}
                    type="TERTIATY"
                />

                <FormClickButton
                    text="Sign In"
                    onPress={onPressHandler}
                />

                <SocialButton
                    buttonTitle="Sign Up with Facebook"
                    //  btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => { }}
                />

                <SocialButton
                    buttonTitle="Sign Up with Google"
                    //   btnType="google"
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