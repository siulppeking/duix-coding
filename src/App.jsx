import Button from './components/button/Button'

const App = () => {

  const onClick = () => {
    alert("¡Botón peligroso clickeado!")
  }

  return (
    <div className="app-container">
      <h1>Botones personalizados</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger" onClick={onClick}>Danger</Button>
        <Button size="lg">Grande</Button>
        <Button disabled size='sm'>Deshabilitado</Button>
        <Button size="lg">Grande El Titulo del Button</Button>
      </div>
    </div>
  )
}

export default App