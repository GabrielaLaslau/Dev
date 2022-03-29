import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import styles from './SignUpPage.styles';

import FormInput from '../../components/FormInput';
import FormClickButton from '../../components/FormClickButton';
import FormTextButton from '../../components/FormTextButton';
import Logo from '../../../assets/images/Logo_1.jpg';

import { useDispatch,useSelector } from 'react-redux';
import { userRegister,setUserame } from '../../Redux/Actions';

import { ScrollView } from "react-native-gesture-handler";
import { useForm } from 'react-hook-form';

// TODO:
// useEffect pt State - selector
// daca selector-ul != null atunci navigam spre alta pag


// TODO:
// Acelasi lucru pt Sign in - cu exceptia ca vom avea /api/auth/local , nu register
// nu mai trimitem email si username ci un IDENTIFIER(username/email) si parola

let json;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const SignUpPage = ({ navigation }) => {

    const state = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('Password');

    console.log('date',state);

    const onRegisterPress = (data) => {
        console.log("register - ", data);
        // navigation.navigate("toConfirmEmail");
        //dispatch(userRegister(username, email, password));
    }

    const onSignInPress = () => {
        navigation.navigate('toSignIn');
    }

    const onPressHandler2 = async () => {
        console.log('JSON:',email,'-',username,'-'+password);
        dispatch(userRegister(email,username, password)); //cheama ce e in action
      //  dispatch(setUsername(username));
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
                    name="E-mail"
                    placeholder="E-mail"
                   // control={control}
                    value={email}
                    onChangeText={setEmail} // onChange pt TextInput , setValue pt FormInput
                   
                />

                <TextInput
                    name="Username"
                    control={control}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                   
                />

                <TextInput
                    name="Password"
                    control={control}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                   
                />

                <TextInput
                    name="Confirm-password"
                    control={control}
                    placeholder="Confirm Password"
                    secureTextEntry
                   
                />

                <FormClickButton
                    text="Register"
                    onPress={onPressHandler2}
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