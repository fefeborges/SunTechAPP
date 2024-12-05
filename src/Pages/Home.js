import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Header from '../Components/Header';
import Banner from '../../assets/banner 3.png'
import { AuthContext } from '../Context/AuthContext';
import Carrinho from './Carrinho';

export default function Home() {

  const {exibeCarrinho } = useContext( AuthContext );

  if( exibeCarrinho ) {
    return( <Carrinho /> )
  }

  return (
    <View style={css.body}>
      <Header/>
      <View style={css.caixabanner}>
      <Image source={Banner} style={css.banner}/>
      </View>

    </View>
  )



}
const css = StyleSheet.create({
  body:{
    width: "100%",
    height: "100%",
    backgroundColor: "blue"
  },
  caixabanner:{
    width: "100%",
    height: 250,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    
  },

  banner: {
    width: "90%",
    height: "80%",
    resizeMode: "cover", 
    borderRadius: 10
  }
})