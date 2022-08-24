import React from "react";
import { Text, View, Image} from "react-native";
import { StyleSheet } from "react-native";
import StyledText from "./StyleText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = (props) =>(
    <View style= {{flexDirection: 'row'}}>
        <View style = {{}}>
            <Image style = {styles.image} source = {{uri: props.ownerAvatarUrl}} />
        </View>
        <View style = {{ flex: 1,  paddingLeft: 10}}>
            <StyledText fontWeight= 'bold' >{props.fullName}</StyledText>
            <StyledText color = 'secondary'>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
    )

const RepositoryItem = (props) => (
    <View key={props.id} style = {styles.conteiner}>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props}/>
    </View>
     )

const styles = StyleSheet.create({
    conteiner: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language:{
        padding: 4,
        marginVertical: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4,
        overflow: "hidden"
    },

    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem