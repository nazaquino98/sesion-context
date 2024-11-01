// src/App.jsx
import React from "react";
import { SessionProvider } from "./context/SessionProvider"; // Asegúrate de que la ruta sea correcta
import Login from "./components/Login";
import Home from "./components/Home";
import useSession from "./hooks/useSession"; // Asegúrate de que el hook está en la ubicación correcta

const App = () => {
  return (
    <SessionProvider>
      <Main />
    </SessionProvider>
  );
};

// Componente principal que maneja el renderizado condicional
const Main = () => {
  const { session } = useSession(); // Ahora está dentro del SessionProvider

  return (
    <div>
      {/* Renderizado condicional: si hay una sesión activa, muestra Home; si no, muestra Login */}
      {session ? <Home /> : <Login />}
    </div>
  );
};

export default App;
