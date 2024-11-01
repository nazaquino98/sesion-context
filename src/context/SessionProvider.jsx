import React, { createContext, useState, useContext } from "react";

//crear el contexto
const SessionContext = createContext();

//crear el proveedor de sesion
const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null); // estado para almacenar la sesion

    //funcion para iniciar sesion
    const login = async (credentials) => {
        try {
            const response = await fetch("http://localhost:4000/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Intenta obtener información del                                         
            console.error("Error de autenticación:", errorData);
            throw new Error("Error de autenticación");
            }
    
            const data = await response.json();
            console.log("Datos del backend:", data); // Verificar la respuesta del backend
    
           const user = {
            nombre: credentials.username,
           };
if (user){
            setSession(user);
        } else {
            throw new Error("datos de usuario ivalidos");
        }
            return user;
    
        } catch (error) {
            console.error("Error en el inicio de sesión:", error.message);
        }
    }
    const logout = () => {
        setSession(null); // elimina los datos de la sesion
    }   

    return (
        <SessionContext.Provider value={{ session, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionProvider, SessionContext };