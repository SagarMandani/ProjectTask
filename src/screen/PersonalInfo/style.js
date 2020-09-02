import { StyleSheet } from 'react-native';
import { Colors } from '@common';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.White
    },
    signInText: {
        fontSize: 22,
        marginTop: 20,
        marginBottom: 20,
        color: Colors.Black,
        textAlign: 'center',
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
    },
})