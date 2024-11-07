import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import ProdutosLista from './ProdutosLista';
import CategoriaLista from './CategoriaLista';

export default function Produto() {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [error, setError] = useState(false);

    async function getAllProdutos() {
        await fetch('http://10.133.22.10:5251/api/Produto/GetAllProdutos', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setProdutos(json))
            .catch(err => setError(true))
    }
    useEffect(() => { getAllProdutos() }, [])

    async function getAllCategorias() {
        await fetch('http://10.133.22.10:5251/api/TipoProduto/GetAllTipoProdutos', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setCategoria(json))
            .catch(err => setError(true))
    }
    useEffect(() => { getAllCategorias() }, [])


    return (
        <View style={css.container}>
            <Text style={css.titulo}>CATEGORIAS</Text>
            {categoria ?
                <FlatList
                    data={categoria}
                    horizontal={true}
                    renderItem={({ item }) => <CategoriaLista imagem={item.fotoTipoProduto} nome={item.nomeTipoProduto} id={item.tipoProdutoId} />}
                    keyExtractor={(item) => item.id}
                />
                :
                <Text style={css.text}>Carregando produtos...</Text>
            }
            {produtos ?
                <FlatList
                style={css.lista2}
                    data={produtos}
                    renderItem={({ item }) => <ProdutosLista imagem={item.fotoProduto} nome={item.nomeProduto} preco={item.precoProduto} id={item.produtoId} />}
                    keyExtractor={(item) => item.id}
                />
                :
                <Text style={css.text}>Carregando produtos...</Text>
            }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#DEDEDE",
        flexGrow: 1,
        color: "black",
        justifyContent: "center",
        alignItems: "center",
      },
    titulo: {
        fontSize: 22
    },
})