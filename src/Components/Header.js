import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Logo from '../../assets/logo azul sem texto.jpeg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Header extends Component {
    render() {
        return (
            <View style={css.header}>
                <View style={css.logo}>
                    <Image style={css.imagem} source={Logo} />
                </View>
                <MaterialCommunityIcons style={css.carrinho} name="cart-outline" size={28} />
            </View>
        )
    }
}
const css = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: "#263470",
        height: 80,
        display: "flex",
        flexDirection: "row",
    },
<<<<<<< HEAD
<<<<<<< HEAD
    logo:{
=======
    logo:{      
>>>>>>> 2b0b33a5522c599fd335e6ca9b15420095290ab0
=======
    logo: {
>>>>>>> 98ae3e1ca2eeb5309fcc3d387165d23e78ee4ffa
        height: "100%",
        width: "70%",
        position: "static"
    },
    carrinho: {
        width: "30%",
        height: "100%",
        textAlign: "right",
        paddingRight: 20,
        verticalAlign: "bottom",
        paddingBottom: 10,
        color: "#F8C728",
    },
    imagem: {
        resizeMode: "cover",
        height: "100%",
        width: "50%",
        position: "relative",
        left: 130
    }
})