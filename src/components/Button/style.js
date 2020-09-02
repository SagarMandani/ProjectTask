import { StyleSheet } from 'react-native';
import { Colors } from '@common';

const styles = StyleSheet.create({
    button : {
        backgroundColor: Colors.Black,
        alignItems: 'center',
        flexDirection: 'row',
        padding:15,
        borderRadius: 50,
    },
    buttonLabel : {
        flex: 1, 
        textAlign: 'center', 
        fontSize: 16, 
        color: Colors.White
    },
    iconStyle : {
        height: 22,
        width: 22,
        tintColor: Colors.White,
        marginLeft: 5
    },
})

export default styles;