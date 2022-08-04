import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import styles from './SignUpPage.styles';

import FormClickButton from '../../components/FormClickButton';
import FormTextButton from '../../components/FormTextButton';
import Logo from '../../../assets/images/Logo_1.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../Redux/Actions';

import { ScrollView } from "react-native-gesture-handler";
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const SignUpPage = ({ navigation }) => {

    const state = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    useEffect(() => {

        /* ... */

    }, [state]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    console.log('date', state);

    const onSignInPress = () => {
        navigation.navigate('toSignIn');
    }

    const onPressHandler = async () => {
        console.log('JSON:', email, '-', username, '-' + password);
        dispatch(userRegister(email, username, password));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={styles.logoStyle}
                />

                <Text style={styles.textStyleIn}>
                    Welcome,
                </Text>
                <Text style={styles.textStyle}>
                    sign up to continue
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
                    name="Username"
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.customInput}
                    name="Password"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.customInput}
                    name="Confirm-password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <FormClickButton
                    text="Register"
                    onPress={onPressHandler}
                />

                <FormTextButton
                    text="Have an account? Sign In"
                    onPress={onSignInPress}
                />

            </View>
        </ScrollView>
    )
}

export default SignUpPage;