import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [usuario, setUsuario] = useState();
    const [monitoramentoDiario, setMonitoramentoDiario] = useState();
    const [carrinho, setCarrinho ] = useState([]);

    const[ exibeCarrinho, setExibeCarrinho ] = useState(false);

    async function Login(email, senha) {
        if (email != "" && senha != "") {
            await fetch('http://10.133.22.10:5251/api/Cliente/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    emailCliente: email,
                    senhaCliente: senha
                })
            })
                .then(res => res.json() )
                .then(json => {
                    setLogado( true );
                    setUsuario( json );
                }
                )
                .catch(err => setError(true) )
        } else {
            setError(true)
        }
    }


    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, usuario: usuario, monitoramentoDiario: monitoramentoDiario, setCarrinho: setCarrinho, carrinho: carrinho, exibeCarrinho: exibeCarrinho, setExibeCarrinho }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;