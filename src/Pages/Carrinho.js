import React, { useContext, useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { TextInput, Text, StyleSheet, View, Image, Button } from 'react-native'
import Header from '../Components/Header';
import { AuthContext } from '../Context/AuthContext';
import CarrinhoLista from './CarrinhoLista';
import Carrinhovazio from '../../assets/carrinhovazio.png'
import Compras from './Compras';

export default function Carrinho() {

  const [error, setError] = useState(false);
  const { setExibeCarrinho, carrinho } = useContext(AuthContext);
  
  const [exibeCompra, setExibeCompra ] = useState(false);

  if( exibeCompra ) {
    return ( <Compras /> )
  }

  return (
    <View >
      <Header />
      <View style={css.meucar}>
        <Text style={css.textomeucar}>MEU CARRINHO</Text>
      </View>
      {carrinho &&
        <FlatList style={css.box}
          showsVerticalScrollIndicator={false}
          data={carrinho}
          renderItem={({ item }) => <CarrinhoLista item={item} imagem={item.fotoProduto} nome={item.nomeProduto} preco={item.precoProduto} id={item.produtoId} />}
          keyExtractor={(item) => item.produtoId}
        />
      }

      {carrinho.length == 0 ?
        <View>
          <View style={css.boxcarrinho}>
            <Image style={css.carrinho} source={Carrinhovazio} />
          </View>
          <TouchableOpacity style={css.btnvoltar} onPress={() => setExibeCarrinho(false)}>
            <Text style={css.TextBtnVoltar} >VOLTAR</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={css.caixacar}>
          <TouchableOpacity style={css.btn} onPress={() => setExibeCompra(true)}>
            <Text style={css.btntext} >CONTINUAR </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.btnvoltar} onPress={() => setExibeCarrinho(false)}>
            <Text style={css.TextBtnVoltar} >VOLTAR</Text>
          </TouchableOpacity>

        </View>
      }







    </View>

  )
}

const css = StyleSheet.create({
  Scrollv: {
    width: "100%",
    height: "100%",
    backgroundColor: "#DEDEDE"
  },
  meucar: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textomeucar: {
    fontSize: 22,

  },
  box: {
    width: "100%",
    minHeight: 450
  },

  caixacar: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "40%",
    height: 45,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#F8C728",

  },
  btntext: {
    color: "black",
    top: 10,
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  btnvoltar: {
    width: "40%",
    height: 45,
    borderRadius: 6,
    borderWidth: 2,
    marginBottom: 20,
    borderColor: "#263470",
    alignSelf: "center",
    top: 15
  },
  TextBtnVoltar: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 17,
    color: "#263470"
  },
  carrinho: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  boxcarrinho: {
    width: 370,
    height: 370,
    justifyContent: 'flex-start',
    marginTop: -360,
    alignSelf: 'center'
  }
})
