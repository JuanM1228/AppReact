import React from "react";
import { Text } from "react-native";

export default function Saludar(props) {
    const firstname = props.firstname;
    const lastname = props.lastname;
    return (
        <Text>Hola {firstname} {lastname}</Text>
    )
}

Saludar.defaultProps = {
    firstname: "Juan",
    lastname: "Herrera"
}