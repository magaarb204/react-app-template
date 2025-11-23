import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  const obtenerSaludo = async () => {
    const r = await fetch("/api/saludo");
    const data = await r.json();
    setMensaje(data.mensaje);
  };

  return (
    <div className="container">
      <header>
        <h1>⚛️ React + Flask Template</h1>
        <p>Ejemplo de integración frontend–backend en Docker.</p>
      </header>

      <main>
        <button onClick={obtenerSaludo}>Saludar</button>
        <p>{mensaje}</p>
      </main>

      <footer>
        <p>© 2025 - Proyecto React + Flask</p>
      </footer>
    </div>
  );
}

export default App;
