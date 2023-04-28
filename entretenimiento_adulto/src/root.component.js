export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '10.5%', margin: '0px 0px 0px 30px'}
  const cropped3 = {width: '12.4%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de Entretenimiento Adulto en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Fiesta de la Cerveza Temuco</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Evento Casino Dreams</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Evil Dead: El Despertar</strong></p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://araucaniasinfronteras.cl/wp-content/uploads/2022/04/fiesta-cerveza.jpg" alt="Fiesta de la Cerveza Temuco" />
      </div>
      <div style={cropped2}>
      <img src="https://pbs.twimg.com/media/CkEE6LAWYAAmsOU?format=jpg&name=large" alt="Evento Casino Dreams" />
      </div>
      <div style={cropped3}>
      <img src="https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000977?referenceScheme=HeadOffice&allowPlaceHolder=true" alt="Evil Dead: El Despertar" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Fecha:</strong> Viernes 08 de Mayo</p>
      <br></br>
      <p style={ulStyle}>Parque Estadio Germán Becker, Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Fecha:</strong> Miércoles 29 de Junio</p>
      <br></br>
      <p style={ulStyle}>Casino Dreams Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Estreno:</strong> Lunes 15 de Junio</p>
      <br></br>
      <p style={ulStyle}>Cine Portal Temuco</p>
      </div>
  </div>
  </div>
  );
}
