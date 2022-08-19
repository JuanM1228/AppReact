import React from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants'
import RepositoryList from "./RepositoryList";

export default function Main(){
    return (
        <View style = {{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text>Rate Repository Aplication</Text>
            <RepositoryList />
        </View>
    );
}