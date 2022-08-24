import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme'
const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    textAlignCenter:{
        textAlign: 'center'
    }
})

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style
    ]

    return(
        <Text style = {textStyles}>
            {children}
        </Text>
    )
}