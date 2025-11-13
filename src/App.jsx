import { useState } from "react";
import Alert from "./components/alert/Alert";
import Button from "./components/button/Button";
import Card from "./components/card/Card"; // 👈 nuevo componente Card
import "./index.css";

const App = () => {
  const onClick = () => {
    alert("¡Botón peligroso clickeado!");
  };

  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  return (
    <div className="app-container" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Botones personalizados</h1>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger" onClick={onClick}>
          Danger
        </Button>
        <Button size="lg">Grande</Button>
        <Button disabled size="sm">
          Deshabilitado
        </Button>
        <Button size="lg">Grande El Título del Button</Button>
      </div>

      {/* === Sección de Cards === */}
      <div
        className="cards-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Card
          title="Proyecto 1"
          description="Una aplicación moderna desarrollada en React."
          image="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=60"
          buttonText="Ver más"
        />
        <Card
          title="Proyecto 2"
          description="Dashboard profesional con componentes reutilizables."
          image="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
          buttonText="Detalles"
        />
        <Card
          title="Proyecto 3"
          description="Sistema con API y backend en Node.js."
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60"
          buttonText="Abrir"
        />
      </div>
      <h1>Alertas Personalizadas</h1>

      {showAlert && (
        <Alert
          variant="danger"
          title="Error"
          message="Hubo un problema al guardar los datos."
          onClose={() => setShowAlert(false)}
        />
      )}

      <Alert
        variant="success"
        title="Éxito"
        message="Tu operación se realizó correctamente."
      />


      {showAlert2 && (
        <Alert
          variant="warning"
          title="Advertencia"
          message="Revisa los campos antes de continuar."
          onClose={() => setShowAlert2(false)}
        />
      )}



      <Alert
        variant="info"
        title="Información"
        message="Nueva versión disponible."
      />
    </div>
  );
};

export default App;
