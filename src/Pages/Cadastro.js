import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/logo suntech.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cadastro({setCadastro}) {
    const [error, setError] = useState(false);
    const [nome, setNome] = useState();
    const [CPF, setCPF] = useState();
    const [Telefone, setTelefone] = useState();
    const [Endereco, setEndereco] = useState();
    const [Email, setEmail] = useState();
    const [Senha, setSenha] = useState();

    const [ resultado , setResultado ] = useState(false);


    async function cadastrar() {
        await fetch( "http://10.133.22.35:5251/api/Cliente/CreateCliente", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeCliente: nome,
                cpfCliente: CPF,
                emailCliente:Email,
                senhaCliente:Senha,
                telefoneCliente:Telefone,
                enderecoCliente:Endereco

                
            })
        })
        .then( res => res.json() )
        .then( json => 
        {
            if( json.clienteId > 0 ) {
                setResultado( true );
                setNome( "" );
                setCPF("");
                setEmail("");
                setEndereco("");
                setSenha("");
            }
        }
        )
        .catch( err => setError( true ))
    }
    return (
        <View style={css.body}>
            <View>
              <MaterialCommunityIcons name="arrow-left" style={css.seta}/>
                <Image style={css.imagem} source={Logo} />
                <Text style={css.titulo}>FAÇA SEU CADASTRO</Text>
            </View>
            <ScrollView style={css.conteudo} showsVerticalScrollIndicator={false}>
                <TextInput style={css.input} onChangeText={(value) => setNome(value)} placeholder='Nome Completo' placeholderTextColor="white"  />
                <TextInput style={css.input} onChangeText={(value) => setCPF(value)}  placeholder='CPF' placeholderTextColor="white"/>
                <TextInput style={css.input} onChangeText={(value) => setTelefone(value)} placeholder='Telefone' placeholderTextColor="white" />  
                <TextInput style={css.input}  onChangeText={(value) => setEndereco(value)} placeholder='Endereço' placeholderTextColor="white" />
                <TextInput style={css.input} onChangeText={(value) => setEmail(value)} placeholder='Email' placeholderTextColor="white" />
                <TextInput style={css.input} onChangeText={(value) => setSenha(value)} placeholder='Senha'  placeholderTextColor="white" />
                <TextInput style={css.input} onChangeText={(value) => setSenha(value)}  placeholder='Confirmar Senha ' placeholderTextColor="white"/>
                <TouchableOpacity style={css.btn} onPress={cadastrar}>
                    <Text style={css.TextBtn}>CADASTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btnvoltar} onPress={ () => setCadastro( false )}>
                    <Text style={css.TextBtnVoltar}>VOLTAR</Text>
                </TouchableOpacity>
                {resultado && 
                    <Text style={css.cadastro}>Cadastrado Com Sucesso</Text>
                }
            </ScrollView>
        </View>
    )
}
const css = StyleSheet.create({
    imagem: {
        width: 230,
        height: 200,
        marginLeft: 30,
        resizeMode: "cover",
    },
    body: {
        backgroundColor: "#263470",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
        borderColor: "white",
        marginBottom: 25,
        color: "white",
        fontSize:17,

    },
    Texto: {
        color: "white",
        fontSize: 17,
    },
    conteudo: {
        width: "80%",
        paddingBottom: 100
    },
    btn: {
        width: "50%",
        height: 40,
        backgroundColor: "#f8c728",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
        margin: 20,
        alignSelf: "center",

    },
    btnvoltar: {
        width: "50%",
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        marginBottom: 20,
        borderColor: "white",
        alignSelf: "center",

    },
    TextBtn: {
        textAlign: "center",
        marginTop:5,
        fontSize: 17

    },
    TextBtnVoltar: {
        textAlign: "center",
        marginTop:5,
        fontSize: 17,
        color: 'white'
    },
    cadastro:{
        width: "100%",
        height: 40,
        backgroundColor: "white",
        borderColor:"black",
        borderRadius: 6,
        borderWidth: 1,
        margin: 20,
        alignSelf: "center",
        textAlign:"center",
        fontSize:17,
        paddingTop:7

    },
    seta:{
        position:"absolute",
        
    },
    titulo:{
        textAlign:"center",
        color:"white",
        fontSize:22,
        marginBottom:30,
    }

    
})