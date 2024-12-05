import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
import Cadastro from '../Pages/Cadastro'

export default function Login({setCadastro}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cliente, setCliente] = useState([]);

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/suntech.jpeg")} style={css.logo} />
            <Text style={css.texto}>FAÇA SEU LOGIN</Text>
            <TextInput
                inputMode="Email"
                placeholder="Email"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="white"
            />
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={css.forgot}>
                <Text style={css.forgotText}>Não possui cadastro ainda?</Text>
                <TouchableOpacity><Text style={css.forgotTextBtn} onPress={() => setCadastro(true)}>Cadastre-se</Text></TouchableOpacity>
            </View>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#263470",
        color: 'white'
    },
    logo: {
        width: "60%",
        height: 130,
        resizeMode: "cover",
        top: -100
    },
    input: {
        width: "80%",
        height: 50,
        marginBottom: 15,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        fontSize: 17,
        color: 'white',
    },
    forgot: {
        width: "80%",
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 17,
        display: 'flex',
        flexDirection: 'row',
    },
    forgotText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
        marginBottom: 5
    },
    forgotTextBtn: {
        textAlign: "center",
        fontSize: 17,
        color: 'white',
        marginLeft: 5,
    },
    btnLogin: {
        width: "40%",
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#F8C728",
    },
    btnLoginText: {
        color: "black",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 18,
    },
    error: {
        width: "80%",
        borderRadius: 6,
        height: 40,
        marginTop: 30,
        backgroundColor: 'white',
    },
    errorText: {
        textAlign: "center",
        fontSize: 17,
        marginTop: 7
    },
    texto: {
        fontSize: 22,
        color: "white",
        marginBottom: 30
    }
});