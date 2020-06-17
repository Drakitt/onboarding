import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Constants from '../config/constants';
import colors from '../config/colors';
const Descripcion = ({ source, textoDesc, textoTit,colort}) => {
     var colortext=colort;
    return (
        <View style={styleDescripcion.container}>
            <Image  style={styleDescripcion.image} source={source} />

            <View >
                <Text style={[styleDescripcion.text1,{color:colort}]} >
                    {textoTit}
                </Text>
                <Text style={[styleDescripcion.text,{color:colort}]} 
                multiline={true}>
                    {textoDesc}
                </Text>
            </View>
        </View>
    );
}


const styleDescripcion=StyleSheet.create({
    container: {
        flex: 3,
        top:-30,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: 400,
        height: 500,
        top: -140,
        right: -100,
    },
    text1: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize:30,
    },
    text: {
        width: Constants.CONFIG.SCREEN_WIDTH * 0.75,
        alignSelf: 'center',
        textAlign:'center',
        fontSize:18,
        fontFamily:'times',
        backgroundColor: 'transparent',
        margin: 20,
    }

});

export default Descripcion;