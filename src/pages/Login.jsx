import React from "react";
import {Button, View, TextInput, StyleSheet} from 'react-native'
import {Formik, useField} from 'formik'
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyleText";
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

const validate = (values) => {
    const errors = {}  
    
    if (!values.email){
        errors.email = 'Email is required'
    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }

    console.log(errors)
    return errors
}

export default function LogInPage (){
    return(
        <Formik 
        initialValues={initialValues} 
        validate = {validate}
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