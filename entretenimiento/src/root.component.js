export default function Root(props) {
  const ulStyle = {color : 'white', fontSize:'16px', width: '45%'}
  const titleStyle = {color : 'white', fontSize:'46px'}
  const row = {display: 'flex'}
  const cropped1 = {width: '30%', margin: '0px 0px 0px 0px'}

  return (
    <div>
    <h1 style={titleStyle}>Eventos de Entretenimiento en Temuco</h1>
    <div style={row}>
      <div style={cropped1}>
      <img src="https://c4.wallpaperflare.com/wallpaper/22/762/507/film-movie-filmmaker-movie-director-wallpaper-preview.jpg" alt="Turismo 1" />
      </div>
  </div>
    <br></br>
    <p style={ulStyle}>
    ¡Bienvenidos a la guía de entretenimiento de Temuco! Si estás buscando eventos emocionantes y divertidos para disfrutar en esta ciudad del sur de Chile, has venido al lugar correcto. Aquí encontrarás información actualizada sobre los principales eventos de entretenimiento en Temuco, desde conciertos y festivales hasta espectáculos de teatro y exposiciones de arte. Si eres un amante de la cultura, la música, el cine o simplemente quieres pasar un buen rato con amigos y familiares, no te pierdas nuestra selección de eventos destacados en Temuco. ¡Prepárate para explorar todo lo que esta ciudad tiene para ofrecer en términos de entretenimiento y diversión!</p>
  </div>
  );
}
