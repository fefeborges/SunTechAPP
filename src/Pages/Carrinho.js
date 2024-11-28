import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput, Text, StyleSheet, View,Image, Button } from 'react-native'

export default function Carrinho() {
    return (
      <View style={css.caixa}>
        <View>
            
        <Text style={css.textopro}>
            produto
          </Text>
  
          <Text style={css.bt}>
          Bt soft blender
          </Text>
  
          <Text style={css.textopro}>
            subtotal
          </Text>
          
          <Text style={css.subpreco}>
          subtotal (sem frete):R$13,99
          </Text>
          <Image style={css.imagem}  />
        </View>
        <View style={css.caixa1}>
        
        </View>
       
      </View>
  
    )
  }

const css = StyleSheet.create({

  })