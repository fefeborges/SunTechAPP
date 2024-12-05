import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react';

export default function Simulacao() {

    const [primeiro, setPrimeiro] = useState(false);
    const [segundo, setSegundo] = useState(false);
    const [terceiro, setTerceiro] = useState(false);
    const [quarto, setQuarto] = useState(false);
    const [quinto, setQuinto] = useState(false);
    const [sexto, setSexto] = useState(false);
    const [setimo, setSetimo] = useState(false);
    const [oitavo, setOitavo] = useState(false);
    const [nono, setNono] = useState(false);
    const [decimo, setDecimo] = useState(false);
    const [decimoprim, setDecimoprim] = useState(false);
    const [decimoseg, setDecimoseg] = useState(false);

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
          <Text style={css.titulo}>CALCULAR ECONOMIA</Text>
      </View>
      <View style={css.info}>
        <Text style={css.subtitulo2}>Informe seu consumo médio mensal:</Text>
        <View style={css.row}>
          <Pressable style={[css.itemconsumo, { backgroundColor: (primeiro) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(current => !current); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$100 - R$249</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (segundo) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(current => !current); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$250 - R$399</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (terceiro) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(current => !current); setQuarto(false); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$400 - R$599</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (quarto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(current => !current); setQuinto(false); setSexto(false); }}><Text style={css.textoconsumo}>R$600 - R$999</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (quinto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(current => !current); setSexto(false); }}><Text style={css.textoconsumo}>R$1000 - R$4999</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (sexto) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setPrimeiro(false); setSegundo(false); setTerceiro(false); setQuarto(false); setQuinto(false); setSexto(current => !current); }}><Text style={css.textoconsumo}>Acima de R$5000</Text></Pressable>
        </View>
        <Text style={css.subtitulo2}>Informe quantidade de watts que o seu segmento gera:</Text>
        <View style={css.row}>
        <Pressable style={[css.itemconsumo, { backgroundColor: (setimo) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(current => !current); setOitavo(false); setNono(false); setDecimo(false); setDecimoprim(false); setDecimoseg(false); }}><Text style={css.textoconsumo}>50 - 99kWh</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (oitavo) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(false); setOitavo(current => !current); setNono(false); setDecimo(false); setDecimoprim(false); setDecimoseg(false); }}><Text style={css.textoconsumo}>100 - 299kWh</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (nono) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(false); setOitavo(false); setNono(current => !current); setDecimo(false); setDecimoprim(false); setDecimoseg(false); }}><Text style={css.textoconsumo}>300 - 499kWh</Text></Pressable>
          <Pressable style={[css.itemconsumo, { backgroundColor: (decimo) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(false); setOitavo(false); setNono(false); setDecimo(current => !current); setDecimoprim(false); setDecimoseg(false); }}><Text style={css.textoconsumo}>500 - 699kWh</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (decimoprim) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(false); setOitavo(false); setNono(false); setDecimo(false); setDecimoprim(current => !current); setDecimoseg(false); }}><Text style={css.textoconsumo}>700 - 899kWh</Text></Pressable>
          <Pressable style={[css.itemconsumo, { width: "43%", backgroundColor: (decimoseg) ? "#F7DC84" : "#F8C728" }]} onPress={() => { setSetimo(false); setOitavo(false); setNono(false); setDecimo(false); setDecimoprim(false); setDecimoseg(current => !current); }}><Text style={css.textoconsumo}>Acima de 900kWh</Text></Pressable>
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
    borderRadius: 6
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
  },
  itemsegmento: {
    height: 48,
    padding: 10,
    width: '90%',
    alignSelf: 'center'
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
    height: 1,
    width: '90%',
    borderColor: 'black',
    borderWidth: 0.5,
    alignSelf: 'center'
  },
  subtitulo2: {
    fontSize: 17,
    textAlign: 'center',
    color: "#544E4E",
    marginTop: 35,
    marginBottom: 10
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
  itemconsumo2: {
    width: '45%',
    marginRight: 15,
    padding: 4,
  },
  itemconsumo3: {
    width: '52%',
    marginRight: 15,
    padding: 5
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