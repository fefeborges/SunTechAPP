import { View, Text, StyleSheet, TextInput, Button, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header';
import CompraAprovacao from './CompraAprovacao';

export default function Compras({ navigation }) {


  const [checkbox, setCheckbox] = useState(false);
  const [checkPix, setCheckPix] = useState(false);
  const [checkBoleto, setCheckBoleto] = useState(false);
  const [aprovacao, setAprovacao] = useState(false);
  const [checkCartao, setCheckCartao] = useState(false);
  const [cep, setCep] = useState();
  const [endereco, setEndereco] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [show, setShow] = useState();
  const [ localizacao, setLocalizacao ] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState();
  const [total, setTotal] = useState();
  const [resultado, setResultado] = useState();

  const validar = () => {
    if (!cep || !endereco || !numero || !bairro || !cidade || !estado) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);

  }
  
    async function comprar() {
      await fetch( "http://10.133.22.35:5251/api/Compra/CreateCompra", {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({
              compraId: id,
              totalCompra: total  
          })
      })
      .then( res => res.json() )
      .then( json => 
      {
          if( json.compraId > 0 ) {
              setResultado( true );
              setId("");
              setTotal("");
          }
      }
      )
      .catch( err => setError( true ))
  }

  if (aprovacao) {
    return (
      <CompraAprovacao navigation={navigation} setAprovacao={setAprovacao} />
    )
  }

  return (
    <ScrollView style={css.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
      <Header />
      <View style={css.info1}>
        <Text style={css.titulo}>COMPRA</Text>
        <Text style={css.texto}>Confirmar o endereço de entrega:</Text>

        <View style={css.boxlocalizacao}>
          <Pressable onPress={() => setLocalizacao( current => !current )}><Text style={css.localizacao}>Usar localização atual</Text></Pressable>
        </View>

        {!localizacao &&
          <View style={css.separador}>
            <View style={css.linha}></View>
            <Text style={css.texto}>Ou</Text>
            <View style={css.linha}></View>
          </View>
        }
      </View>
      <View style={css.info2}>
        {!localizacao &&
          <>
            <TextInput onChangeText={(value) => setCep(value)} placeholder="CEP" style={css.input} placeholderTextColor={'#263470'} />
            <TextInput onChangeText={(value) => setEndereco(value)} placeholder="Endereço" style={css.input} placeholderTextColor={'#263470'} />
            <TextInput onChangeText={(value) => setNumero(value)} placeholder="Número" style={css.input} placeholderTextColor={'#263470'} />
            <TextInput onChangeText={(value) => setBairro(value)} placeholder="Bairro" style={css.input} placeholderTextColor={'#263470'} />
            <TextInput onChangeText={(value) => setCidade(value)} placeholder="Cidade" style={css.input} placeholderTextColor={'#263470'} />
            <TextInput onChangeText={(value) => setEstado(value)} placeholder="Estado" style={css.input} placeholderTextColor={'#263470'} />
            <View style={css.box}>
              <Pressable style={[css.checkbox, { backgroundColor: (checkbox) ? "#BABABA" : "white" }]} onPress={() => setCheckbox(current => !current)}></Pressable>
              <Text style={css.texto}>Tornar este o meu endereço padrão</Text>
            </View>
          </>
        }
        <TouchableOpacity style={css.btn} onPress={validar}>
          <Text style={css.textobtn}>CONFIRMAR</Text>
        </TouchableOpacity>
        {show && <View style={css.aviso}><Text style={css.avisotexto}>Endereço salvo com sucesso</Text></View>}
        <View>
          <Text style={css.pagamento}>Selecionar a forma de pagamento:</Text>
        </View>
        <View style={css.boxpix}>
          <Pressable style={[css.checkboxpix, { backgroundColor: (checkPix) ? "#BABABA" : "white" }]} onPress={() => { setCheckPix(current => !current); setCheckBoleto(false); setCheckCartao(false); }}></Pressable>
          <View>
            <Text style={css.textpix}>PIX</Text>
            <Text style={css.textopix}>O código PIX gerado para pagamento é válido por 30 minutos após a finalização do pedido.</Text>
          </View>
        </View>

        <View style={css.boxboleto}>
          <Pressable style={[css.checkboxboleto, { backgroundColor: (checkBoleto) ? "#BABABA" : "white" }]} onPress={() => { setCheckBoleto(current => !current); setCheckPix(false); setCheckCartao(false); }}></Pressable>
          <View>
            <Text style={[css.textoboleto, { color: "white" }]}>Boleto</Text>
            <Text style={[css.textboleto, { color: "white" }]}>Vencimento em 1 dia útil. A data de entrega será alterado devido ao tempo de processamento do boleto.</Text>
          </View>
        </View>

        <View>
          <Pressable style={[css.cartao, { backgroundColor: (checkCartao) ? "#BABABA" : "white" }]} onPress={() => { setCheckCartao(current => !current); setCheckBoleto(false); setCheckPix(false); }}><Text style={css.textcartao}>Adicionar cartão de crédito</Text></Pressable>
        </View>

        <View style={css.boxcupom}>
          <Text style={css.textcupom}>Cupom de desconto ou Vale-presente</Text>
          <View style={css.boxinput}>
            <TextInput style={css.inputcupom} />
            <TouchableOpacity style={css.btncupom}>
              <Text style={css.texto2}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={css.final} onPress={() => setAprovacao(true)}>
          <Text style={css.textfinal}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const css = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignSelf: "center"
  },
  titulo: {
    fontSize: 22,
    marginTop: 30,
    marginBottom: 30
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginLeft: 20
  },
  checkboxpix: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  },
  checkboxboleto: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  },
  input: {
    fontSize: 17,
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '90%',
    height: 50,
    marginBottom: 15,
    marginLeft: 20
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  texto: {
    fontSize: 17,
    marginLeft: 15
  },
  boxlocalizacao: {
    width: '60%',
    height: 40,
    backgroundColor: '#F8C728',
    opacity: 0.5,
    borderRadius: 6,
    margin: 25
  },
  localizacao: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 7,
  },
  linha: {
    borderWidth: 0.5,
    width: '40%',
    height: 0.5,
    borderColor: 'black',
    marginLeft: 20,
    marginTop: 12
  },
  separador: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20,
    marginBottom: 20
  },
  info1: {
    width: '90%',
    alignItems: 'center'
  },
  info2: {
    width: '90%',
  },
  btn: {
    backgroundColor: '#F8C728',
    height: 40,
    width: '60%',
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  textobtn: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 7
  },
  boxcupom: {
    width: '90%',
    height: 120,
    backgroundColor: '#F8C728',
    borderRadius: 6,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 15
  },
  inputcupom: {
    width: '50%',
    height: 30,
    marginTop: 20,
    marginLeft: 25,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: '#f0f0f0',
    opacity: 0.7
  },
  boxinput: {
    display: 'flex',
    flexDirection: 'row'
  },
  btncupom: {
    backgroundColor: '#263470',
    width: 70,
    height: 30,
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 6,
  },
  texto2: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4
  },
  boxpix: {
    width: '90%',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: 'center'
  },
  boxboleto: {
    width: '90%',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#263473',
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: -4
  },
  pagamento: {
    textAlign: 'center',
    bottom: 10,
    fontSize: 17,
    marginTop: 15,
    marginBottom: 10
  },
  cartao: {
    height: 40,
    width: '90%',
    borderRadius: 6,
    marginBottom: 20,
    marginTop: 25,
    alignSelf: 'center',
    borderWidth: 2,
  },
  textcartao: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 7
  },
  final: {
    backgroundColor: '#263470',
    height: 40,
    width: '60%',
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 2,
    marginBottom: 20
  },
  textcupom: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 25,
  },
  textfinal: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 7
  },
  textpix: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  textopix: {
    marginTop: 18,
    textAlign: 'center',
    fontSize: 16,
    width: '45%',
    marginLeft: -20
  },
  textoboleto: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  textboleto: {
    marginTop: 18,
    marginRight: 55,
    textAlign: 'center',
    fontSize: 16,
  },
  aviso: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',

  },
  avisotexto: {
    textAlign: 'center',
    fontSize: 17,
    color: '#263470',
  }
})