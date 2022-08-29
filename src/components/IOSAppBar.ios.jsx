import React from "react";
import { ScrollView, StyleSheet, View, ViewPropTypes } from "react-native";
import StyledText from "./StyleText";
import Constants from 'expo-constants';
import theme from "../theme";
import {Link, useLocation} from 'react-router-native'

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    scroll:{
        paddingBottom: 15,

    },
    text:{
        color: theme.AppBar.textSecondary,
        paddingHorizontal: 10,
    },
    active:{
        color: theme.AppBar.textPrimary
    }
})

const AppBarTab = ({children, to}) =>{
    const {pathname} = useLocation()

    const active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
            {children}
            </StyledText>
        </Link>
    )
}

const getRouteProps = ({})


const AppBar = () => {
    return(
        <View style={styles.conteiner}>
            <ScrollView  horizontal style = {styles.scroll}>
                <AppBarTab  to= "/">Repositories</AppBarTab>
                <AppBarTab  to= "/signin">Sign In</AppBarTab>

            </ScrollView>

        </View>
    )
}

export default AppBar