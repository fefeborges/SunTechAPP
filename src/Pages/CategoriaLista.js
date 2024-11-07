import { Image, StyleSheet, Text, View } from "react-native";


export default function CategoriaLista({ id, imagem, nome }) {
    console.log( id );
    return(
        <View style={css.container} key={id}>  
        <View style={css.boximagem}>
            <Image style={css.imagem} source={{uri: imagem}}/>   
        </View>
        <View style={css.boxnome}>
            <Text style={css.nome}>{nome}</Text>
        </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        width: 180,
      },
    boximagem: {
        backgroundColor: "white",
        height: 140,
        width: 140,
        borderRadius: 8,
    },
    imagem: {
        height: "95%",
        width: "100%",
        resizeMode: "contain"
    },
    nome: {
        fontSize: 17,
        textAlign: "center"
    },
    boxnome: {
        height: 100,
        width: "62%",
        top: 5
    }
})