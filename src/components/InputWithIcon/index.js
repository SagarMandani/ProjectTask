import React, { Fragment, PureComponent } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Colors } from '@common';
import styles from './style';

class InputWithIcon extends PureComponent {

    render() {
        const { refField, iconUrl, autoCapitalize, autoFocus, keyboardType, multiline, placeholder, returnKeyType, onSubmitEditing, blurOnSubmit, placeholderTextColor,
            secureTextEntry, value, onChangeHandler, children, containerStyle, iconStyle, inputTextStyle, selectionColor, editable } = this.props;
        const { container, iconView, icon, textInput } = styles;
        return (
            <Fragment>
                <View style={[container, containerStyle]}>
                    <View style={iconView}>
                        {iconUrl &&
                            <Image
                                resizeMode="contain"
                                source={iconUrl}
                                style={[icon, iconStyle]} />
                        }
                    </View>

                    <TextInput
                        ref={refField}
                        editable={editable}
                        autoCapitalize={autoCapitalize}
                        autoFocus={autoFocus}
                        keyboardType={keyboardType}
                        multiline={multiline}
                        placeholder={placeholder}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                        blurOnSubmit={blurOnSubmit}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.Black}
                        selectionColor={selectionColor ? selectionColor : Colors.Black}
                        onChangeText={value => onChangeHandler(value)}
                        style={[textInput, inputTextStyle]} />
                    {children}
                </View>
            </Fragment>
        );
    }
}

export default InputWithIcon;