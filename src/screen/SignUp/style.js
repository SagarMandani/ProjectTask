import { StyleSheet } from 'react-native';
import { Colors } from '@common';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.White
    },
    signUpText: {
        fontSize: 22,
        marginBottom: 20,
        color: Colors.Black,
        textAlign: 'center',
        marginTop: 20
    },
    inputIconView: {
        paddingRight: 20,
        justifyContent: 'center',
        height: '100%'
    },
    inputIcon: {
        height: 20,
        width: 20,
        tintColor: Colors.Black
    },
    inputText: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 15,
        color: Colors.Black
    }
})