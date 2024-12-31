import './style_body.css'
import Linea from '../linea/index.jsx'

function Body() {
  return (
    <>
    <Linea></Linea>
    <section className='container_body'>
      <div className='container_imagen'>
        <div className='container_texto'>
          <p className='frase_imagen'>`La verdadera felicidad está en aceptarse uno mismo y entrar en contacto con uno mismo`</p>
        </div>
        <img className='imagen_body' src="/img1b_1.webp" alt="Maby Mereles" />
      </div>
      <section className='container_comentario'>
          <p className='texto1'>Me alegra mucho que hayas llegado a mi sitio web</p>
          <p className='texto2'>Antes que nada, quiero darte la bienvenida a este espacio de counseling.</p>
          <p className='texto2'>Un espacio de escucha, para mejorar tu bienestar personal.</p>
      </section>
    </section>
    <Linea></Linea>
    </>
  )
}

export default Body