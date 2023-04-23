export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '15%', margin: '0px 0px 0px 30px'}
  const cropped3 = {width: '13.1%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos deportivos en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Gimnasia Personas Mayores 2023</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Tenis Iniciación Temuco 2023</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Acondicionamiento Físico 2023</strong></p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://www.lavozdelnorte.cl/wp-content/uploads/2014/04/Adultos-Gimnasia.jpg" alt="Museo Nacional Ferroviario" />
      </div>
      <div style={cropped2}>
      <img src="https://www.ertheo.com/blog/wp-content/uploads/2016/09/ejercicios_de_tenis_para_ninos_-_imagen_via_lasellatennis.com_.jpg" alt="Pabellon Araucania" />
      </div>
      <div style={cropped3}>
      <img src="https://www.formacionacadef.es/wp-content/uploads/2020/03/ventajas-del-acondicionamiento-300x260.jpg" alt="Catedral de Temuco" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Horario:</strong> Martes 15:00 - 16:00</p>
      <br></br>
      <p style={ulStyle}>SEDE SOCIAL - Los Sauces, Temuco, Chile</p>
      <br></br>
      <p style={ulStyle}>3 cupos disponibles</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Horario:</strong> Lunes 19:00 - 20:00</p>
      <br></br>
      <p style={ulStyle}>Parque Estadio German Becker (Cancha Tenis 4) - Av. Pablo Neruda</p>
      <br></br>
      <p style={ulStyle}>1 cupo disponibles</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Horario:</strong> Miércoles 15:00 - 16:00</p>
      <br></br>
      <p style={ulStyle}>Parque Estadio German Becker (Zona Calentamiento Norte) - Av. Pablo Neruda</p>
      <br></br>
      <p style={ulStyle}>4 cupos disponibles</p>
      </div>
  </div>
  </div>
  );
}

