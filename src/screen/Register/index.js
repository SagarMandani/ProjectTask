import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Alert, Image } from 'react-native';
import { Icons } from '@common';
import { CustomButton, InputWithIcon } from '@component';
import styles from './style';

const Register = (props) => {

    const refName = useRef(null);
    const refPassword = useRef(null);
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const onChangeName = (text) => {
        setName(text);
    }

    const onChangePassword = (text) => {
        setPassword(text);
    }

    const isValid = () => {
        let errorStatus = true;
        let error = ''
        if (!name) {
            error = 'User name is required';
            errorStatus = false;
        } else if (!password) {
            error =  'Password is required';
            errorStatus = false;
        }
        if (!errorStatus) {
            Alert.alert('App', error)
        }
        return errorStatus;
    }

    const onRegister = () => {
        if(isValid()) {
            props.navigation.navigate('SignUp', { name });
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text style={styles.registerText}>Registration</Text>
            <Text style={styles.inputText}>User name *</Text>
            <InputWithIcon
                refField={refName}
                autoCapitalize={`none`}
                autoFocus={false}
                placeholder={'Please enter user name'}
                returnKeyType={`next`}
                onSubmitEditing={() => refPassword.current.focus()}
                blurOnSubmit={false}
                value={name}
                onChangeHandler={(text) => onChangeName(text)}>
                <View style={styles.inputIconView}>
                    <Image resizeMode="contain" source={Icons.userIcon} style={styles.inputIcon} />
                </View>
            </InputWithIcon>
            <Text style={styles.inputText}>Password *</Text>
            <InputWithIcon
                refField={refPassword}
                autoCapitalize={`none`}
                autoFocus={false}
                keyboardType={`default`}
                placeholder={'Please enter password'}
                returnKeyType={`done`}
                secureTextEntry={true}
                value={password}
                onChangeHandler={(text) => onChangePassword(text)}>
                <View style={styles.inputIconView}>
                    <Image resizeMode="contain" source={Icons.lockIcon} style={styles.inputIcon} />
                </View>
            </InputWithIcon>

            <CustomButton title='Next' onPress={() => onRegister()} />
        </View>
    )
}

export default Register;