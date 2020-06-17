import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image, Modal } from 'react-native';
import PropTypes from 'prop-types';
import Button from './button'
import constants from '../config/constants';

const footer = ({  onPressP,onPressN, isLoading,color2N,color2P,disableN,disableP, colorN,colorP }) => {
    return (
        <View style={styleButtonsFooter.container}>
            <Button
                isLoading={isLoading}
                onPress={onPressP}
                color={colorP}
                type={constants.STRINGS.TYPEP}
                color2={color2P}
                disable={disableP}
                titleButton={constants.STRINGS.PREV}>
            </Button>

            <Button
                isLoading={isLoading}
                onPress={onPressN}
                color={colorN}
                disable={disableN}
                color2={color2N}
                type={constants.STRINGS.TYPEN}
                titleButton={constants.STRINGS.NEXT}>
            </Button>
        </View>
    );
}
const styleButtonsFooter = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    
});
export default footer;