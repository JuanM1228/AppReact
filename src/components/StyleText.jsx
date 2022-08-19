import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        fontSize: 12,
        color: 'grey',
    },
    bold:{
        fontWeight: 'bold'
    },
    blue:{
        color: 'blue'
    },
    big:{
        fontSize: 20
    },
    small:{
        fontSize: 10,
    }
})

export default function StyledText ({blue, bold, big, small}){
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        bold && styles.bold,
        small && styles.small,
    ]

    return(
        <Text style = {textStyles}>
            {children}
        </Text>
    )
}