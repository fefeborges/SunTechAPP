import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function ProdutosLista({ id, imagem, nome, preco }) {
    const [checkbox, setCheckbox] = useState(false);
    return(
        <View style={css.container} key={id}>  
        <View style={css.box}>
              <Pressable style={[css.checkbox, { backgroundColor: (checkbox) ? "#BABABA" : "white" }]} onPress={() => setCheckbox(current => !current)}></Pressable>
             
            </View>
            <View style={css.boximagem}>
                <Image style={css.imagem} source={{uri: imagem}}/>   
            </View>
            <View style={css.info}>
                <Text style={css.nome}>{nome}</Text>
                <Text style={css.preco}>R${preco},00</Text>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.btntexto}>-</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={css.btn}>
                    <Text style={css.btntexto}>+</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
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
        color: "black",
        alignSelf: "flex-end",
        textAlign: "center",
        marginRight: 30,
    },
    preco: {
        fontSize: 17,
        width: "32%",
        color: "#263470",
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
        width:"92%",
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
        backgroundColor:"#263470",
        height: 25,
        width: "8%",
        borderRadius: 5,
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
    }

})