import React from 'react'
import {
    Text,
    StyleSheet,
    Pressable
} from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY", fgColor }) => {
    return (
        <Pressable onPress={onPress}
            style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {},
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 15,
    },

    container_PRIAMRY: {
        backgroundColor: '#2C3539',
    },

    container_TERTIARY: {},

    text: {
        color: '#ffff',
    }
});

export default CustomButton;
