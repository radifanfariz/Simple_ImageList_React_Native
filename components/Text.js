import React from 'react';
import { StyleSheet, Text as TextComponent } from "react-native";
import color from "../constants/color";

const styles = StyleSheet.create({
    defaultText:{
        color: color.primary,
        fontSize: 18,
    }
})

export const Text = ({children, style = {} }) => {
    const textStyles = [styles.defaultText]
    textStyles.push(style)
    return <TextComponent style={textStyles}>{children}</TextComponent>
}