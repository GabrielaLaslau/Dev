import React from 'react'
import {
    Text,
    Pressable
} from 'react-native'

import styles from './FormClickButton.styles';

const CustomButtonPressable = ({ onPress, text, type = "PRIMARY", fgColor }) => {
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

export default CustomButtonPressable;