import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { CustomButton, InputWithIcon } from '@component';
import styles from './style';

const PersonalInfo = (props) => {

    const refPanCard = useRef(null);
    const refAadhaarNo = useRef(null);
    const [panCard, setPanCard] = useState();
    const [aadhaarNo, setAadhaarNo] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    useEffect(() => {
        const { params } = props.route;
        if (params) {
            setName(params.name);
            setEmail(params.email);
            setPhone(params.phone);
        }
    }, []);

    const onChangePanCard = (text) => {
        setPanCard(text);
    }

    const onChangeAadhaarNo = (text) => {
        setAadhaarNo(text);
    }

    const isValid = () => {
        let errorStatus = true;
        let regex = "/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/"; 
        let error = ''
        if (!panCard) {
            error = 'Pan card number is required';
            errorStatus = false;
        } else if (!aadhaarNo) {
            error = 'Aadhaar card number is required';
            errorStatus = false;
        }
        if (!errorStatus) {
            Alert.alert('App', error)
        }
        return errorStatus;
    }

    const onPersonalInfo = () => {
        if (isValid()) {
            props.navigation.navigate('Home', { name, email, phone, panCard, aadhaarNo });
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text style={styles.signInText}>Personal Info</Text>
            <Text style={styles.inputText}>Pan Card Number *</Text>
            <InputWithIcon
                refField={refPanCard}
                autoCapitalize={`none`}
                autoFocus={false}
                placeholder={'Please enter pan card number'}
                returnKeyType={`next`}
                onSubmitEditing={() => refAadhaarNo.current.focus()}
                blurOnSubmit={false}
                value={panCard}
                onChangeHandler={(text) => onChangePanCard(text)}>
            </InputWithIcon>
            <Text style={styles.inputText}>Aadhaar Number *</Text>
            <InputWithIcon
                refField={refAadhaarNo}
                autoCapitalize={`none`}
                autoFocus={false}
                keyboardType={`default`}
                placeholder={'Please Aadhaar Card Number'}
                returnKeyType={`done`}
                value={aadhaarNo}
                onChangeHandler={(text) => onChangeAadhaarNo(text)}>
            </InputWithIcon>

            <CustomButton title='Submit' onPress={() => onPersonalInfo()} />
        </View>
    )
}

export default PersonalInfo;