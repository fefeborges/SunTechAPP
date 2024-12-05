import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../Components/Header';
import Sol from '../../assets/sol rodape (1).png'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';

export default function CompraAprovacao( {setAprovacao }) {

  const {setExibeCarrinho} = useContext( AuthContext );

  const navigation = useNavigation();

  const [compra, setCompra] = useState([]);
  const [error, setError] = useState(false);

  async function getCompraId() {
    await fetch('http://10.133.22.10:5251/api/Compra/GetCompraId/{id}', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setCompra(json))
      .catch(err => setError(true))
  }
  useEffect(() => { getCompraId() }, [])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.fundo}>
        <View style={styles.modal}>
          <View style={styles.info1}>
            <Text style={styles.title} >COMPRA REALIZADA COM SUCESSO!</Text>
            <Image source={Sol} style={styles.sol} />
          </View>
          <Text style={styles.info}>Pedido: 13752000</Text>
          <Text style={styles.info}>Total: R$5400,00</Text>
          <Text style={styles.info}>Status: Pago</Text>
          <Text style={styles.info}>Previsão de Entrega: 08/12/24</Text>
          <TouchableOpacity style={styles.button} onPress={() => { setExibeCarrinho( false ); setAprovacao(false); navigation.navigate("Home") }}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  modal: {
    position: 'relative',
    bottom: 60,
    backgroundColor: '#263470',
    padding: 20,
    borderRadius: 6,
    shadowColor: '#000',
    alignSelf: 'center',
    width: '80%',
    height: 320,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
    width: '70%'
  },
  button: {
    backgroundColor: '#F8C728',
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
    width: '60%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17
  },
  info: {
    fontSize: 17,
    color: '#fff',
    marginTop: 10
  },
  fundo: {
    height: 300,
    width: '100%',
    marginTop: 200,
    backgroundColor: '#BABABA',
  },
  sol: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 5
  },
  info1: {
    display: 'flex',
    flexDirection: 'row'
  }
});