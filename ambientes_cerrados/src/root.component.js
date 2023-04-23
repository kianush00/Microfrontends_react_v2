export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '100%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '17%', margin: '0px 0px 0px 0px'}
  const cropped2 = {width: '15%', margin: '0px 0px 0px 30px'}
  const cropped3 = {width: '21.8%', margin: '0px 0px 0px 30px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de turismo cerrado en Temuco</h1>
    <br></br>
    <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}>Museo Nacional Ferroviario Pablo Neruda</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>Pabellón Araucanía</p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>Catedral de Temuco Diócesis San José</p>
      </div>
  </div>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/06/Museo-Ferroviario-01-1.jpg" alt="Museo Nacional Ferroviario" />
      </div>
      <div style={cropped2}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/06/Pabellon-Araucania-01-1.jpg" alt="Pabellon Araucania" />
      </div>
      <div style={cropped3}>
      <img src="https://destinotemuco.cl/wp-content/uploads/2022/06/Catedral-de-Temuco-02.jpg" alt="Catedral de Temuco" />
      </div>
  </div>
  <br></br>
  <div style={row}>
      <div style={cropped1}>
      <p style={ulStyle}>
      Fue declarado Monumento Nacional Histórico en 1989 y se inauguró el 24 de febrero de 2004 (año en que se celebró el centenario del natalicio del poeta Pablo Neruda). Posee una invaluable colección de material rodante que ha sido restaurado, manteniendo sus características originales. En este espacio se pueden apreciar locomotoras y vagones de épocas pasadas, piezas que fueron cuidadosamente seleccionadas por su valor histórico y características técnicas, transformándose en un atractivo turístico cultural para Temuco.      </p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>
      A los pies del Cerro Ñielol, en un espacio de 20 mil metros cuadrados, se levanta el Pabellón Araucanía, construcción que representó a Chile en la Expo Milán y se inspiró en el concepto de los alimentos y la cadena de afectos que hay detrás del trabajo artesanal de los productores. Son 1.910 metros cuadrados construidos con un 80 por ciento de madera de pino radiata y estructuras metálicas que simulan un gran “canasto de mimbre”. Se trata de una gran vitrina regional, nacional y mundial donde se muestra la cultura y diversidad alimentaria de Chile, lo que se acompaña de visitas guiadas interactivas.      </p>
      </div>
      <div style={cropped2}>
      <p style={ulStyle}>
      Es también conocida como la parroquia del Sagrario. En sus inicios fue una iglesia parroquial, pero luego del terremoto de 1960 fue derrumbada. Se reconstruyó posteriormente con campañas de la comunidad y aportes del entonces Papa Juan Pablo II. Es una de las construcciones eclesiásticas más nuevas en Chile. La primera piedra de la nueva edificación fue colocada el 19 de marzo de 1981, para la fiesta de San José, siendo terminada recién en el año 1991.      </p>
      </div>
  </div>
  </div>
  );
}


