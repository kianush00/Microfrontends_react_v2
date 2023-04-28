export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '11.5%', margin: '0px 0px 0px 30px'}
  const cropped3 = {width: '17%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de Entretenimiento Familiar en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Circo Las Águilas Humanas</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Super Mario Bros: La Película</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Circo teatro: Volaré</strong></p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://imagenes.passline.com/eventos/circo-las-aguilas-humanas-en-temuco-img.jpg" alt="Circo aguilas humanas" />
      </div>
      <div style={cropped2}>
      <img src="https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000959?referenceScheme=HeadOffice&allowPlaceHolder=true" alt="Super Mario Bros" />
      </div>
      <div style={cropped3}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2023/02/volare.png" alt="Circo Teatro" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Fecha:</strong> Viernes 03 de Marzo</p>
      <br></br>
      <p style={ulStyle}>Parque Isla Cautín, Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Estreno:</strong> Jueves 06 de Abril</p>
      <br></br>
      <p style={ulStyle}>Cine Portal Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Fecha:</strong> Domingo 26 de Febrero</p>
      <br></br>
      <p style={ulStyle}>Museo Nacional Ferroviario Pablo Neruda</p>
      </div>
  </div>
  </div>
  );
}
