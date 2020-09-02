import { StyleSheet } from 'react-native';
import { Colors } from '@common';

const styleSheet = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 20,
        borderColor: Colors.Black,
        borderWidth: 2
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.Black
    },
    textInput: {
        flex: 1,
        color: Colors.Black,
        fontSize: 16,
    }
})

export default styleSheet;