import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/suntech.jpeg")} style={css.logo} />
            <Text style={css.texto}>
                FAÇA SEU LOGIN  
            </Text>
            <TextInput
                inputMode="E-mail"
                placeholder="E-mail"
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
                <Text style={css.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
            <View style={css.forgot}>
                <Text style={css.forgotText}>Não possui cadastro ainda? Cadastre-se</Text>
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
        backgroundColor: "#263470"
    },
    logo: {
        width: "60%",
        height: 130,
        resizeMode: "cover",
        top: -155
    },
    input: {
        width: "75%",
        height: 50,
        marginBottom: 15,
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1
        
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    forgotText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    texto: {
        fontSize: 22,
        color: "white",
        position: "absolute",
        top: 260
    }
});