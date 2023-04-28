export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '16.8%', margin: '0px 0px 0px 30px'}
  const cropped3 = {width: '11.7%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de Entretenimiento de Tercera Edad en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Orquesta Filarmónica de Temuco</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Gala Anual Personas Mayores</strong></p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Nueva Ola: La Película</strong></p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2023/01/orquesta-filarmonica.png" alt="Orquesta Filarmonica" />
      </div>
      <div style={cropped2}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/12/Gala-Anual-Personas-Mayores-03_Mesa-de-trabajo-1.jpg" alt="Gala anual" />
      </div>
      <div style={cropped3}>
      <img src="https://prensaeventos.cl/wp-content/uploads/2018/06/AFICHE-NUEVA-OLA-1.jpg" alt="Nueva Ola" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}><strong>Fecha:</strong> Domingo 15 de Enero</p>
      <br></br>
      <p style={ulStyle}>Terraza Cerro Ñielol, Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Fecha:</strong> Viernes 16 de Diciembre</p>
      <br></br>
      <p style={ulStyle}>Gimnasio Olímpico UFRO, Temuco</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}><strong>Estreno:</strong> Viernes 28 de Mayo</p>
      <br></br>
      <p style={ulStyle}>Cine Hoyts Temuco</p>
      </div>
  </div>
  </div>
  );
}
