export default function Root(props) {

  const ulStyle = {color : 'white', fontSize:'23px', width: '50%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const greenColorStyle = {color : '#2eae00'}

  return (
    <div>
    <h1 style={titleStyle}>Visualizador de restricción de uso de leña en Temuco</h1>
    <img src="https://www.nuevoaire.cl/wp-content/uploads/2020/05/poligoos-copia.jpg" alt="Mapa de restricciones de uso de leña" />
    <p style={ulStyle}>
    El uso de leña puede estar restringido en ciertas áreas debido a preocupaciones ambientales o de salud pública. Asegúrese de revisar las regulaciones locales antes de utilizar leña.
      </p>
  </div>
  );
}
