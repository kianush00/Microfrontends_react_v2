export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '45%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '14%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '14%', margin: '0px 0px 0px 120px'}

  return (
    <div>
    <h1 style={titleStyle}>Turismo en Temuco</h1>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/06/Imagenes-22-06-Nuevas-temuco1.png" alt="Turismo 1" />
      </div>
      <div style={cropped2}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/06/Imagenes-22-06-Nuevas-temuco2.png" alt="Turismo 2" />
      </div>
  </div>
    
    <p style={ulStyle}>
    Temuco es la capital de la región de La Araucanía y pertenece a la provincia de Cautín. La ciudad fue fundada cerca del río Cautín y en medio de dos cerros, el Monumento Natural Cerro Ñielol y el Conun Huenu (puerta al cielo).
Con una población de 282.415 habitantes (según el Censo del año 2017) es la comuna con mayor cantidad de población a nivel regional.
Se encuentra ubicada a 689 kilómetros de Santiago y representa un polo de atracción turística que distribuye a los visitantes a las diversas zonas de la región, promoviendo los recursos naturales, el capital humano, el patrimonio y la identidad multicultural. Temuco es el principal centro de distribución de las cuatro grandes áreas de atractivos turísticos: área Nahuelbuta, área Cordillera, área Costera y área Lacustre.</p>
<br></br>
<p style={ulStyle}>
La ciudad ofrece diversos atractivos naturales, patrimoniales y urbanos para visitar, donde destacan el Monumento Natural Cerro Ñielol, el Museo Nacional Ferroviario Pablo Neruda, el Museo Regional de La Araucanía, el Pabellón de La Araucanía, la Ruta Huellas de Neruda, entre muchos otros que te invitamos a descubrir.
      </p>
  </div>
  );
}
