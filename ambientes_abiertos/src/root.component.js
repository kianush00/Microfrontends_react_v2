export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '19.2%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de turismo abierto en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}>Parque Urbano Isla Cautín</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>Museo Regional de La Araucanía</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>Monumento Natural Cerro Ñielol</p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2023/01/veranoentemuco-4.jpg" alt="Isla Cautin" />
      </div>
      <div style={cropped2}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2023/01/museoregional.jpg" alt="Museo Regional Araucania" />
      </div>
      <div style={cropped2}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/12/cerro-01.webp" alt="Museo Regional Araucania" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}>
      Se emplaza en 27 hectáreas en el sector sur del centro urbano de Temuco, posee espacios e instalaciones para realizar actividades recreativas, culturales, deportivas y medio ambientales, organizadas en torno a una gran área verde central. Sus actividades y espacios dan cuenta de un lugar con carácter multicultural, sustentable y de encuentro para los diversos actores, grupos sociales de la ciudad, la región y turistas.
      </p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>
      Emplazado en lo que fuera el Monumento Nacional Casa Thiers, el Museo Regional muestra alrededor de setecientas piezas prehistóricas e históricas, tanto arqueológicas como etnográficas, entre las que destacan la alfarería de la cultura pitrén y del complejo El Vergel.
      </p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>
      Desde el centro de Temuco, a sólo siete cuadras de la plaza Aníbal Pinto, se encuentra el cerro Ñielol, la única área silvestre protegida de Chile en el radio urbano. Este monumento natural es administrado por CONAF, cuenta con camino de asfalto, diversos senderos para recorrer, restaurant y miradores para disfrutar de las vistas panorámicas de la ciudad.
      </p>
      </div>
  </div>
  </div>
  );
}
