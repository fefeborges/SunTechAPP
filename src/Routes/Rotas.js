import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Compras from "../Pages/Compras";
import CompraAprovacao from '../Pages/CompraAprovacao';
import Carrinho from '../Pages/Carrinho';      
import Produto from '../Pages/Produto';
import Perfil from '../Pages/Perfil';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    const [ cadastro, setCadastro ] = useState();

    if (!logado && !cadastro) {
        return (<Login setCadastro={setCadastro}/>)
    }

    if( !logado && cadastro ) {
        return ( <Cadastro setCadastro={setCadastro}/> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#263470',
                        height: 55
                    },
                    tabBarActiveTintColor: "#F8C728",
                    tabBarInactiveTintColor: 'white'
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Produto"
                    component={Produto}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="white-balance-sunny" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}