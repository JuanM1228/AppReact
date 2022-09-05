import React from "react";
import { Routes, Route, Redirect} from "react-router-native";
import {View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./appBar";
import LogInPage from "../pages/Login";


export default function Main(){
    return (
        <View style = {{flex: 1}}>
            <AppBar />
            <Routes>
            <Route path="/" exact element = {<RepositoryList />} />
            <Route path="/signin" exact element = {<LogInPage />} />
            </Routes>
        </View>
    );
        
}
