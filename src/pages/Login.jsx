import React from "react";
import {Button, Text, TextInput, View} from 'react-native'
import {Formik} from 'formik'
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
    email: '',
    password: ''
}

export default function (){
    return(
        <Formik initialValues={initialValues} onSubmit = {values => console.log(values)}>
            {({handleChange, handleSubmit, values}) =>{
                return(
                    <View>
                        <StyledTextInput 
                        placeholder="E-mail"
                        value = {values.email}
                        OnChangeText = {handleChange('email')}
                        />
                        <StyledTextInput 
                        placeholder="Password"
                        value ={values.password}
                        OnChangeText = {handleChange('password')}
                        />
                        <Button onPress={handleSubmit} title = 'Log In' />
                    </View>
                )
            }}
        </Formik>
    )
}