import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Register from './container/Register';
import SignUp from './container/SignUp';
import PersonalInfo from './container/PersonalInfo';
import Home from './container/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register" headerMode="none">
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
                <Stack.Screen name="Home" component={Home} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;