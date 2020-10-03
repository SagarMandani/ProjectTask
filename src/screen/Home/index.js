import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import styles from './style';

const Home = (props) => {

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
            setPanCard(params.panCard);
            setAadhaarNo(params.aadhaarNo);
        }
    }, []);

    useEffect(() => {
        props.getEmployee();
    }, [])

    const renderItem = (item, index) => {
        return (
            <View key={index} style={{ padding: 10 }}>
                <Text>employee first name : {item.first_name}</Text>
                <Text>employee last name : {item.last_name}</Text>
                <Text>employee email : {item.email}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text style={styles.informationText}>Information</Text>
            <Text>User Name: {name}</Text>
            <Text>Email Id: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Pan Card: {panCard}</Text>
            <Text>Aadhaar No: {aadhaarNo}</Text>
            {
                props.employeeLoading
                    ?
                    <ActivityIndicator size="large" color="#000" />
                    :
                    <View style={{flex:1}}>
                        <Text style={{fontSize: 20,textAlign: 'center', marginBottom: 10}}>Employee List</Text>
                        <FlatList
                            data={props.employeeData}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => renderItem(item, index)}
                        />
                    </View>
            }
        </View>
    )
}

export default Home;