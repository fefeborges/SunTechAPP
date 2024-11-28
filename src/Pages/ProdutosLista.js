import { Button, Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../Context/AuthContext";

export default function ProdutosLista({ item, id, imagem, nome, preco }) {


    const { setCarrinho, carrinho } = useContext(AuthContext);
    const [ show, setShow] = useState();

    function addProduto() {
        
        const novoCarrinho = [...carrinho, item];
        setCarrinho(novoCarrinho);
        setShow( true );
        setTimeout( () => {
            setShow( false );
        }, 3000 );
                
    }


    return (
        <>
        <View style={css.container} key={id}>
            <View style={css.boximagem}>
                <Image style={css.imagem} source={{ uri: imagem }} />
            </View>
            <View style={css.info}>
                <Text style={css.nome}>{nome}</Text>
                <Text style={css.preco}>R${preco},00</Text>
                <TouchableOpacity style={css.btn} onPress={addProduto}>
                    <Text style={css.btntexto}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        {show && <View style={css.aviso}><Text style={css.avisotexto}>Produto adicionado no carrinho!</Text></View>}
        </>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#263470",
        width: "80%",
        height: 150,
        display: "flex",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 15,
        paddingBottom: 15,
        borderRadius: 8,
    },
    nome: {
        fontSize: 17,
        width: "55%",
        color: "white",
        alignSelf: "flex-end",
        textAlign: "center",
        marginRight: 30,
    },
    preco: {
        fontSize: 17,
        width: "32%",
        color: "#F8C728",
        alignSelf: "center",
        marginLeft: 15,
        marginTop: 30,
    },
    boximagem: {
        backgroundColor: "white",
        height: 105,
        width: "38%",
        borderRadius: 8,
        alignSelf: "flex-start",
        marginBottom: -30,
        marginTop: 50,
        position: "absolute",
        left: -30,
        top: -25
    },
    imagem: {
        width: "92%",
        height: "92%",
        resizeMode: "contain",
        left: 5,
        top: 5
    },
    info: {
        width: "100%",
        marginTop: 20
    },
    btn: {
        borderColor: "#F8C728",
        borderWidth: 2,
        height: 25,
        width: "8%",
        borderRadius: 20,
        alignSelf: "flex-end",
        marginRight: 20,
        alignItems: "center",
        marginTop: -25
    },
    btntexto: {
        color: "#F8C728",
        textAlign: "center",
        marginTop: -4,
        fontSize: 20,
    },
    aviso: {
        backgroundColor:'#f0f0f0',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        
    },
    avisotexto:{
        textAlign: 'center',
        fontSize: 17,
        color: '#263470',
    }
});

