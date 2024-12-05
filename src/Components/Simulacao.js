import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react';

export default function Simulacao() {

  const [residencia, setResidencia] = useState(false);
  const [condominio, setCondominio] = useState(false);
  const [apartamento, setApartamento] = useState(false);
  const [comercio, setComercio] = useState(false);
  const [agronegocio, setAgronegocio] = useState(false);
  const [industria, setIndustria] = useState(false);
  const [primeiro, setPrimeiro] = useState(false);
  const [segundo, setSegundo] = useState(false);
  const [terceiro, setTerceiro] = useState(false);
  const [quarto, setQuarto] = useState(false);
  const [quinto, setQuinto] = useState(false);
  const [sexto, setSexto] = useState(false);

  const [show, setShow] = useState();


  function calcular() {
    setShow(true);
    setTimeout( () => {
      setShow(false);
    }, 3000);
  }

  return (
    <View style={css.container}>
      <View>
          <Text style={css.titulo}>SIMULADOR SOLAR</Text>
      </View>
      <View style={css.boxsegmento}>
        <Text style={css.subtitulo}>SEGMENTO:</Text>
        <Pressable style={[css.itemsegmento, { backgroundColor: (residencia) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(current => !current); setCondominio(false); setApartamento(false); setComercio(false); setAgronegocio(false); setIndustria(false); }}><Text style={css.textosegmento}>Residência</Text></Pressable>
        <View style={css.linha}></View>
        <Pressable style={[css.itemsegmento, { backgroundColor: (condominio) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(false); setCondominio(current => !current); setApartamento(false); setComercio(false); setAgronegocio(false); setIndustria(false); }}><Text style={css.textosegmento}>Residência em Condomínio</Text></Pressable>
        <View style={css.linha}></View>
        <Pressable style={[css.itemsegmento, { backgroundColor: (apartamento) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(false); setCondominio(false); setApartamento(current => !current); setComercio(false); setAgronegocio(false); setIndustria(false); }}><Text style={css.textosegmento}>Apartamento</Text></Pressable>
        <View style={css.linha}></View>
        <Pressable style={[css.itemsegmento, { backgroundColor: (comercio) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(false); setCondominio(false); setApartamento(false); setComercio(current => !current); setAgronegocio(false); setIndustria(false); }}><Text style={css.textosegmento}>Comércio</Text></Pressable>
        <View style={css.linha}></View>
        <Pressable style={[css.itemsegmento, { backgroundColor: (agronegocio) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(false); setCondominio(false); setApartamento(false); setComercio(false); setAgronegocio(current => !current); setIndustria(false); }}><Text style={css.textosegmento}>Agronegócio</Text></Pressable>
        <View style={css.linha}></View>
        <Pressable style={[css.itemsegmento, { backgroundColor: (industria) ? "#919191" : "#BABABA" }]} onPress={() => { setResidencia(false); setCondominio(false); setApartamento(false); setComercio(false); setAgronegocio(false); setIndustria(current => !current); }}><Text style={css.textosegmento}>Indústria</Text></Pressable>
        <View style={css.linha}></View>
      </View>
      <View style={css.info2}>
        <Text style={css.subtitulo2}>Informe seu consumo médio mensal:</Text>
        <View style={css.row}>
          <Pressable style={[css.itemconsumo, { backgroundColor: (primeiro) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(current => !current); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$100 - R$249</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (segundo) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(current => !current); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$250 - R$399</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (terceiro) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(current => !current); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$400 - R$599</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (quarto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(current => !current); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$600 - R$999</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (quinto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(current => !current); setSexto(false); }}><Text style={css.textoconsumo}>R$1000 - R$4999</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (sexto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(current => !current); }}><Text style={css.textoconsumo}>Acima de R$5000</Text></Pressable>
        </View>
        <TouchableOpacity style={css.btn} onPress={calcular}>
          <Text style={css.textobtn}>SIMULE GRÁTIS</Text>
        </TouchableOpacity>
        {show && <View style={css.aviso}><Text style={css.avisotexto}>Resultado enviado em seu email!</Text></View> }
      </View>
    </View>
  )

}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#BABABA',
    borderRadius: 6,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
  },
  itemsegmento: {
    height: 40,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    
  },
  textosegmento: {
    fontSize: 17,
    color: "#544E4E"
  },
  textoconsumo: {
    fontSize: 16,
    color: "#263470",
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 17,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 20,
    color: "#544E4E"
  },
  linha: {
    height: 2,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    
  },
  subtitulo2: {
    fontSize: 17,
    textAlign: 'center',
    color: "#544E4E",
    marginTop: 35,
    marginBottom: 10
  },
  info2: {

  },
  btn1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    width: '100%'
  },
  itemconsumo: {
    width: '37%',
    padding: 4,
  },
  btn2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  btn3: {
    alignSelf: 'center',
    marginTop: 15
  },
  btn: {
    width: "40%",
    backgroundColor: "#263470",
    alignItems: "center",
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 15,
    alignSelf: 'center',
    marginBottom: 25
  },
  textobtn: {
    color: 'white',
    fontSize: 16,
    top: 5
  },
  row: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 10
  },
  aviso: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '90%',
    height: 35,
    alignSelf: 'center',
    marginBottom: 10,

  },
  avisotexto: {
    textAlign: 'center',
    fontSize: 17,
    color: '#263470',
    top: 5
  }
})