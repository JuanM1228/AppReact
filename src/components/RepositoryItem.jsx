import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import StyledText from "./StyleText";

const RepositoryItem = (props) => (
    <View key={props.id} style = {styles.conteiner}>
    <StyledText bold>id: {props.id}</StyledText>
    <StyledText small>fullName: {props.fullName}</StyledText>
    <StyledText blue>description: {props.description}</StyledText>
    <Text>language: {props.language}</Text>
    <Text>stargazersCount: {props.stargazersCount}</Text>
    <Text>forksCount: {props.forksCount}</Text>
    <Text>reviewCount: {props.reviewCount}</Text>
    <Text>ratingAverage: {props.ratingAverage}</Text>
    </View>
     )

const styles = StyleSheet.create({
    conteiner: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
})

export default RepositoryItem