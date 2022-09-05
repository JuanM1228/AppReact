import React from "react";
import {Button, View, TextInput, StyleSheet} from 'react-native'
import {Formik, useField} from 'formik'
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyleText";
import { loginValidationSchema } from "./login";

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form:{
        margin: 12
    },
    error:{
        color: 'red',
        fontSize: 14,
        marginBottom: 20,
        marginTop: -5
    } 
})

const FormikInputValue = ({name, ...props}) =>{
    const [field, meta, helpers] = useField(name)
    return(
        <>
        <StyledTextInput 
        error={meta.error}
        values={field.value}
        onChangeText = {value => helpers.setValue(value)}
        {...props}
        />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function LogInPage (){
    return(
        <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues} 
        onSubmit = {values => console.log(values)}>
            {({handleSubmit}) =>{
                return(
                    <View style = {styles.form}>
                        <FormikInputValue
                        name = 'email'
                        placeholder="E-mail"
                        />
                         <FormikInputValue
                        name = 'password'
                        placeholder="Password"
                        secureTextEntry
                        />
                        <Button onPress={handleSubmit}
                        title = 'Log In'></Button>
                    </View>
                )
            }}
        </Formik>
    )
}

