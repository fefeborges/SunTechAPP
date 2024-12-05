
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import Simulacaoimg from '../../assets/homem placa.png';
import Economiaimg from '../../assets/placaeconomia.jpg';
import Simulacao from '../Components/Simulacao';
import Economia from '../Components/Economia';
import Carousel from 'react-native-reanimated-carousel';


export default function Home() {

    const [simulacao, setSimulacao] = useState(false);
    const [calculo, setCalculo] = useState(false);
    const width = Dimensions.get('window').width;

    
        const images = [
            require('../../assets/1.png'),
            require('../../assets/2.png'),
            require('../../assets/3.png'),
            require('../../assets/4.png'),
        ];
    

        return (
            <View style={css.container}>
                <ScrollView style={css.scroll} showsVerticalScrollIndicator={false}>
                    <Header />
                    <Carousel
                        loop
                        width={width}
                        height={width / 2}
                        autoPlay={true}
                        data={images}
                        scrollAnimationDuration={4000}
                        panGestureHandlerProps={{
                            activeOffsetX: [-10, 10],
                        }}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ item, index }) => (
                            <View style={{
                                flex: 1, justifyContent: 'center', alignItems:
                                    'center'
                            }}>
                                <Image source={item} style={{ width: '100%', height: '100%' }} />
                            </View>
                        )}
                    />

                    <View style={css.caixaso}>
                        <Text style={css.texto1}>SÓ NA SUNTECH</Text>
                    </View>
                    <View style={css.bigbox}>
                        <View style={[css.caixaazul, { height: (simulacao || calculo) ? 400 : 260 }]}>
                            {calculo == false &&
                                <View style={css.simulacao} >
                                    {!simulacao ? (

                                        <View style={css.simu2}>
                                            <View style={css.boxtitulo}>
                                                <Text style={css.textosimulacao}>FAÇA UMA SIMULAÇÃO AGORA MESMO</Text>
                                            </View>
                                            <View style={css.box}>
                                                <View style={css.boximg}>
                                                    <Image style={css.imgsimulacao} source={Simulacaoimg} />
                                                </View>
                                                <TouchableOpacity style={css.botaosimu} onPress={() => setSimulacao(true)}>
                                                    <Text style={css.textosimu}>SIMULE GRÁTIS</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ) : (
                                        <>
                                            <MaterialCommunityIcons onPress={() => setSimulacao(false)} name='close-circle' style={css.fechar} />
                                            <Simulacao />
                                        </>
                                    )}
                                </View>
                            }
                            {simulacao == false &&
                                <View style={css.calculo}>
                                    {!calculo ?
                                        <>
                                            <View style={css.boxeconomia}>
                                                <View style={css.info}>
                                                    <Text style={css.textoeconomia}>CALCULE SUA ECONOMIA</Text>
                                                    <TouchableOpacity style={css.botaoeconomia} onPress={() => setCalculo(true)}>
                                                        <Text style={css.textosimu}>CALCULAR</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={css.boxamarela}>
                                                    <View style={css.boximg2}>
                                                        <Image source={Economiaimg} style={css.imgeconomia} />
                                                    </View>
                                                </View>
                                            </View>
                                        </>
                                        :
                                        <>
                                            <MaterialCommunityIcons onPress={() => setCalculo(false)} name='close-circle' style={css.fechar} />
                                            <Economia />
                                        </>
                                    }
                                </View>
                            }
                        </View>
                    </View>
                    <View style={css.caixa2}>
                    </View>
                </ScrollView>
            </View>
        )
    };


    const css = StyleSheet.create({
        container: {
            backgroundColor: '#DEDEDE',
            flexGrow: 1
        },
        scroll: {
            height: "100%"
        },
        caixabanner: {
            width: "100%",
            height: 250,
            justifyContent: "center",
            alignItems: "center",
        },
        banner: {
            width: "90%",
            height: "80%",
            resizeMode: "cover",
            borderRadius: 10
        },
        caixaso: {
            width: "100%",
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
        },
        texto1: {
            backgroundColor: "#F8C728",
            textAlign: "center",
            width: "55%",
            height: 60,
            paddingTop: 15,
            fontSize: 24,
            borderRadius: 6,
            color: "#263470",
        },
        caixaazul: {
            backgroundColor: "#263470",
            width: "100%",
            height: 250,
            alignItems: "center",
            marginTop: 100,
            position: "static"
        },
        simulacao: {
            backgroundColor: "#BABABA",
            width: "85%",
            height: 200,
            position: "relative",
            bottom: "35%",
            borderRadius: 6,
        },
        simu2: {
            height: 200
        },
        calculo: {
            backgroundColor: "#BABABA",
            width: "85%",
            position: "relative",
            bottom: "20%",
            borderRadius: 6,
            height: 200
        },
        caixa2: {
            height: 190
        },
        imgsimulacao: {
            height: "100%",
            width: "100%",
            borderBottomLeftRadius: 6,
            resizeMode: "cover"
        },
        boximg: {
            height: 120,
            width: 160,
            marginTop: 48,
            position: 'static'
        },
        boximg2: {
            height: 80,
            width: 150,
            marginRight: 30,
            position: 'relative',
            left: 8,
            bottom: 15
        },
        boxeconomia: {
            height: 200
        },
        imgeconomia: {
            height: "100%",
            width: "100%",
            borderRadius: 6,
            resizeMode: "cover"
        },
        box: {
            width: "100%",
            height: "70%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        textosimulacao: {
            position: "relative",
            top: 30,
            width: "80%",
            textAlign: "center",
            fontSize: 22,
            alignSelf: 'flex-end',
        },
        textoeconomia: {
            fontSize: 22,
            width: '60%',
            marginTop: 15,
            alignSelf: 'flex-start',
            marginBottom: 25,
            right: 10,
            textAlign: 'center'
        },
        boxtitulo: {
            alignSelf: 'center',
            width: '100%',
            marginTop: -10,
            marginRight: 50
        },
        botaosimu: {
            width: "40%",
            backgroundColor: "#263470",
            alignItems: "center",
            height: 35,
            borderRadius: 6,
            borderWidth: 1,
            marginTop: 10,
            marginLeft: 20,
        },
        botaoeconomia: {
            width: "40%",
            backgroundColor: "#263470",
            alignItems: "center",
            alignSelf: 'flex-start',
            height: 35,
            borderRadius: 6,
            borderWidth: 1,
            top: 25,
            right: 20
        },
        textosimu: {
            fontSize: 17,
            marginTop: 5,
            color: "white"
        },
        boxamarela: {
            height: 80,
            width: '50%',
            alignSelf: 'center',
            backgroundColor: '#F8C728',
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            marginTop: 24,
            position: 'static'
        },
        info: {
            display: 'flex',
            flexDirection: 'row'
        },
        fechar: {
            fontSize: 20,
            padding: 10,
            alignSelf: 'flex-end',
            color: "#919191"
        }
    })