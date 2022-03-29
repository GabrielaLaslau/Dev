import React from 'react'
import {
    Text,
    View,
    TextInput,
} from 'react-native'

import styles from './FormInput.styles';
import { Controller } from 'react-hook-form';

const FormInput = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
    setValue }) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View
                        style={[
                            styles.container,
                            { borderColor: error ? 'red' : '#000000' },
                        ]}>
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    )
}

export default FormInput