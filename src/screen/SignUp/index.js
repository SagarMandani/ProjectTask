import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, Alert } from 'react-native';
import { Icons } from '@common';
import { CustomButton, InputWithIcon } from '@component';
import styles from './style';

const SignUp = (props) => {

    const refName = useRef(null);
    const refEmail = useRef(null);
    const refPhone = useRef(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    useEffect(() => {
        const { params } = props.route;
        if(params) {
            setName(params.name);
        }
    }, []);

    const onChangeName = (text) => {
        setName(text);
    }

    const onChangeEmail = (text) => {
        setEmail(text);
    }

    const onChangePhone = (text) => {
        setPhone(text);
    }

    const isValid = () => {
        let errorStatus = true;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let error = ''
        if (!name) {
            error = 'User name is required';
            errorStatus = false;
        } else if (!email) {
            error =  'email is required';
            errorStatus = false;
        } else if (!reg.test(email)) {
            error = 'Email is invalid';
            errorStatus = false;
        } else if (!phone) {
            error =  'phone number is required';
            errorStatus = false;
        }
        if (!errorStatus) {
            Alert.alert('App', error)
        }
        return errorStatus;
    }

    const onSignUp = () => {
        if(isValid()) {
            props.navigation.navigate('PersonalInfo', { name, email, phone });
        }        
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text style={styles.signUpText}>Sign Up</Text>
            <Text style={styles.inputText}>User name *</Text>
            <InputWithIcon
                refField={refName}
                autoCapitalize={`none`}
                autoFocus={false}
                placeholder={'Please enter user name'}
                returnKeyType={`next`}
                onSubmitEditing={() => refEmail.current.focus()}
                blurOnSubmit={false}
                value={name}
                onChangeHandler={(text) => onChangeName(text)}>
                <View style={styles.inputIconView}>
                    <Image resizeMode="contain" source={Icons.userIcon} style={styles.inputIcon} />
                </View>
            </InputWithIcon>
            <Text style={styles.inputText}>Email Id *</Text>
            <InputWithIcon
                refField={refEmail}
                autoCapitalize={`none`}
                autoFocus={false}
                keyboardType={`email-address`}
                placeholder={'Please enter email'}
                returnKeyType={`next`}
                onSubmitEditing={() => refPhone.current.focus()}
                blurOnSubmit={false}
                value={email}
                onChangeHandler={(text) => onChangeEmail(text)}>
                <View style={styles.inputIconView}>
                    <Image resizeMode="contain" source={Icons.emailIcon} style={styles.inputIcon} />
                </View>
            </InputWithIcon>
            <Text style={styles.inputText}>Phone number *</Text>
            <InputWithIcon
                refField={refPhone}
                autoCapitalize={`none`}
                autoFocus={false}
                keyboardType={`numeric`}
                placeholder={'Please enter phone number'}
                returnKeyType={`done`}
                value={phone}
                onChangeHandler={(text) => onChangePhone(text)}>
                <View style={styles.inputIconView}>
                    <Image resizeMode="contain" source={Icons.lockIcon} style={styles.inputIcon} />
                </View>
            </InputWithIcon>

            <CustomButton title='Next' onPress={() => onSignUp()} />
        </View>
    )
}

export default SignUp;