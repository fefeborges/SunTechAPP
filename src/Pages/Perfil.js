import React from 'react'
import { Text, FlatList, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import Header from '../Components/Header';

export default function Perfil() {

    const [cliente, setCliente] = useState([]);
    const [error, setError] = useState(false);

    async function getClienteId() {
        await fetch('http://10.133.22.10:5251/api/Cliente/GetClienteId/', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setCliente(json))
            .catch(err => setError(true))
    }
    useEffect(() => { getClienteId() }, [])


    return (
        <View style={css.container}>
            <Header />
            <View style={css.boxamarela}></View>
            <View style={css.boxbranca}>
                <View style={css.boxabreviacao}>
                    <Text style={css.abreviacao}>FP</Text>
                </View>
                <Text style={css.texto1}>OLÁ, FELIPE PENACHI DE MELLO</Text>
            </View>
            <ScrollView style={css.info} showsVerticalScrollIndicator={false}>
                <Text style={css.titulo}>Dados pessoais</Text>
                <View>
                    <Text style={css.label}>CPF</Text>
                </View>
                <View style={css.boxinfo}>
                    <Text style={css.texto2}>345.066.828-36</Text>
                </View>
                <View>
                    <Text style={css.label}>Endereço</Text>
                </View>
                <View style={css.boxinfo}>
                    <Text style={css.texto2}>Rua Fulano de Tal, N° 524</Text>
                </View>
                <View>
                    <Text style={css.label}>Email</Text>
                </View>
                <View style={css.boxinfo}>
                    <Text style={css.texto2}>fefe.mello@gmail.com</Text>
                </View>
                <View>
                    <Text style={css.label}>Telefone</Text>
                </View>
                <View style={css.boxinfo}>
                    <Text style={css.texto2}>(14) 99148-4822</Text>
                </View>
                <View style={css.boxinfo2}>
                    <View style={css.linha}></View>
                    <Text style={css.titulo}>Minhas Placas</Text>
                    <View style={css.info2}>
                        <Text style={css.texto3}>18°C</Text>
                        <View style={css.circulo}>
                            <Text style={css.texto4}>18.3 kW</Text>
                            <Text style={css.texto5}>Energia Solar Agora</Text>
                        </View>
                        <View style={css.box2}>
                            <Text style={css.texto7}>Produção hoje</Text>
                            <Text style={css.texto6}>21.5 kW</Text>
                        </View>
                    </View>
                    <View style={css.linha}></View>
                </View>
                <View style={css.boxinfo3}>
                    <Text style={css.titulo}>Informações Adicionais</Text>
                    <View style={css.info3}>
                        <Text style={css.texto8}>Data da Instalação:</Text>
                        <Text style={css.texto9}>15/07/2015</Text>
                        <Text style={css.texto8}>Próxima Manutenção:</Text>
                        <Text style={css.texto9}>15/01/2025</Text>
                    </View>
                    <TouchableOpacity style={css.btn}>
                        <Text style={css.textobtn}>SOLICITAR MANUTENÇÃO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#DEDEDE",
        flexGrow: 1,
        color: "black",
        alignItems: "center",
    },
    boxamarela: {
        height: 170,
        width: "85%",
        backgroundColor: "#F8C728",
        borderRadius: 6,
        top: 40
    },
    boxbranca: {
        height: 135,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 6,
        position: "absolute",
        top: 200
    },
    texto1: {
        textAlign: "center",
        fontSize: 18
    },
    boxabreviacao: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "black",
        width: 60,
        height: 60,
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 22
    },
    abreviacao: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 13
    },
    titulo: {
        fontSize: 20,
        marginTop: 20
    },
    info: {
        width: '80%',
        top: 100,
        height: '70%'
    },
    boxinfo: {
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        width: "100%",
        height: 40,
        borderRadius: 6,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: '500'
    },
    texto2: {
        fontSize: 17,
        padding: 8
    },
    linha: {
        height: 1,
        width: "100%",
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 20
    },
    boxinfo2: {
        width: "100%",
        height: 200,
        marginTop: 20
    },
    info2: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15
    },
    texto3: {
        fontSize: 24,
        color: '#263470',
        marginTop: 13,
        marginLeft: 20
    },
    texto6: {
        fontSize: 24,
        color: '#263470',
        marginTop: 10
    },
    circulo: {
        height: 150,
        width: 150,
        borderRadius: 90,
        borderColor: '#F8C728',
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        marginTop: 45,
        alignSelf: 'center'
    },
    texto4: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 35
    },
    texto5: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
    },
    texto7: {
        fontSize: 17,
        textAlign: 'left',
        marginBottom: -10,
        marginLeft: -10,
        color: '#263470',
    },
    box2: {
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: -15
    },
    boxinfo3: {
        marginBottom: 300,
        height: 200,
        width: '100%',
        marginTop: 100
    },
    info3: {
        backgroundColor: '#263470',
        width: '90%',
        height: 180,
        borderRadius: 6,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    texto8: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        marginTop: 20
    },
    texto9: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        marginTop: 10
    },
    btn: {
        backgroundColor: '#F8C728',
        width: '90%',
        height: 45,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 25,
        alignSelf: 'center'
    },
    textobtn: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 8
    }
})