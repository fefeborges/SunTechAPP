import React, { useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { TextInput, Text, StyleSheet, View, Image, Button } from 'react-native'
import Header from '../Components/Header';

export default function Carrinho() {

  const[produtos, setProdutos] = useState([]);
  const[error, setError] = useState(false);
  const [filtro, setFiltro] = useState([]);
  
  
  return (
    <View >
      
        <Header />
        <View style={css.meucar}>
          <Text style={css.textomeucar}>MEU CARRINHO</Text>
        </View>
        {filtro.length == 0 && produtos &&
        <FlatList style={css.box}
          showsVerticalScrollIndicator={false}
          data={produtos}
          renderItem={({ item }) => <CarrrinhoLista item={item}  imagem={item.fotoProduto}  nome={item.nomeProduto}  preco={item.precoProduto } id={item.produtoId} />}
          keyExtractor={(item) => item.produtoId }  
          />
      }

      { filtro.length == 0 && produtos.length == 0 && 
        <Text style={css.text}>Carregando Produtos</Text>
    }
       
        
        <View style={css.caixacar}>
          <TouchableOpacity style={css.btn}>
            <Text style={css.btntext} >CONTINUAR </Text>
          </TouchableOpacity>

        </View>
          


     
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
box:{
  width: "100%",
  minHeight: 450
},

caixacar: {
  width: "100%",
  height: 120,
  alignItems: "center",
  justifyContent: "center",
},
btn:{
  width: "40%",
  height: 45,
 borderWidth: 1,
  borderRadius: 6,
  backgroundColor: "#F8C728",
 
}, 
btntext:{
  color: "black",
  top: 10,
  textAlign: "center",
  fontSize: 18,
},
text:{
  fontSize:20,
  textAlign:"center"
}

})
