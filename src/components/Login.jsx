import React, { useState } from "react";
import useSession from "../hooks/useSession";

const Login = () => {
    const { login } = useSession();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials); // Llama a la función de login
            alert("Sesión iniciada con éxito"); // Mostrar alerta solo si el login es exitoso
        } catch (error) {
            console.error(error.message); // Manejo de errores en la consola
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Nombre de usuario"
                required
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Contraseña"
                required
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default Login;
