import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';

class CustomButton extends Component {

    render() {
        const { title, onPress, style, disabled, textStyle, icon, imgStyle } = this.props;
        const { button, buttonLabel, iconStyle } = styles;
        return (
            <Fragment>
                <TouchableOpacity activeOpacity={1} disabled={disabled} onPress={() => onPress()} style={[button, style]}>
                    {icon && <Image source={icon} style={[iconStyle, imgStyle]} />}
                    <Text style={[buttonLabel, textStyle]}>{title}</Text>
                </TouchableOpacity>
            </Fragment>
        )
    }
}

export default CustomButton;