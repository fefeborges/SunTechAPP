import { View, Text, TextInput, Button, RadioButton, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Compra() {



  return (
    <View>
      <Text>compra</Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>COMPRA</Text>

      <Button title="Continuar com o endereço de entrega" />
      <Text>Ou</Text>

      <TextInput placeholder="CEP" />
      <TextInput placeholder="Endereço" />
      <TextInput placeholder="Número" />
      <TextInput placeholder="Bairro" />
      <TextInput placeholder="Cidade" />
      <TextInput placeholder="Estado" />

      <View style={css.checkbox}></View>
      <Text>Tornar este o meu endereço padrão</Text>

      <Button title="Selecionar a forma de pagamento" />

      <RadioButton value="pix" />
      <Text>PIX</Text>
      <Text>O código PIX gerado para pagamento é válido por 30 minutos após a finalização do pedido.</Text>
      <Text>Vencimento em 1 dia útil. A data de vencimento será alterada de acordo com o tempo de processamento da boleto.</Text>

      <Button title="Adicionar um cartão de crédito" />

      <TextInput placeholder="Cupom de desconto ou Vale-presente" />
      <Button title="OK" />

      <Button title="FINALIZAR" onPress={comprar}/>
    </View>
  )
}

const css = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5
  }
})
