import React from "react";
import useSession from "../hooks/useSession";

const Home = () => {
    const { session, logout } = useSession();
    console.log("datasession: " , session);

    //verifica que el usuario exista antes de acceder a su nombre
    

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
          <h1>Bienvenido, {session ? session.nombre : ""}!</h1> {/* Muestra el nombre del usuario */}
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      );
    };
    
    export default Home;