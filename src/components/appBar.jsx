import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import StyledText from "./StyleText";
import Constants from 'expo-constants';
import theme from "../theme";
import {Link} from 'react-router-native'

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text:{
        color: theme.AppBar.textPrimary
    }
})

const AppBarTab = ({active, children, to}) =>{
    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
            {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return(
        <View style={styles.conteiner}>
            <AppBarTab active to= "/">Repositories</AppBarTab>
            <AppBarTab active to= "/signin">Sign In</AppBarTab>

        </View>
    )
}

export default AppBar