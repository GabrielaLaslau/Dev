import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input} 
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C3539',
        width: '100%',
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
    },

    input: {

    },
});

export default CustomInput