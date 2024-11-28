import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import ProdutosLista from './ProdutosLista';
import CategoriaLista from './CategoriaLista';
import Header from '../Components/Header';

export default function Produto() {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [error, setError] = useState(false);


    function filterByCategoria(categoria) {
        const filtrado = produtos.filter(item => item.tipoProdutoId == categoria);
        setFiltro(filtrado);
    }

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
            <Header />
            <Text style={css.titulo}>CATEGORIAS</Text>
            {categoria ?
                <FlatList
                    data={categoria}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }) => <CategoriaLista imagem={item.fotoTipoProduto} nome={item.nomeTipoProduto} id={item.tipoProdutoId} filterByCategoria={filterByCategoria} />}
                    keyExtractor={(item) => item.tipoProdutoId}
                />
                :
                <Text style={css.text}>Carregando produtos...</Text>
            }
            {filtro &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={css.lista2}
                    data={filtro}
                    renderItem={({ item }) => <ProdutosLista item={item} imagem={item.fotoProduto} nome={item.nomeProduto} preco={item.precoProduto} id={item.produtoId} />}
                    keyExtractor={(item) => item.produtoId}
                />
            }
            { filtro.length == 0 && produtos &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={css.lista2}
                    data={produtos}
                    renderItem={({ item }) => <ProdutosLista item={item} imagem={item.fotoProduto} nome={item.nomeProduto} preco={item.precoProduto} id={item.produtoId} />}
                    keyExtractor={(item) => item.produtoId}
                />
            }

            { filtro.length == 0 && produtos.length == 0 && 
                <Text style={css.text}>Carregando Produtos</Text>
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
        fontSize: 22,
        marginTop: 20
    },
    lista2: {
        width: "90%",
        flexGrow: 1,
        top: -30,
    },
    text: {
        fontSize: 20
    }
})