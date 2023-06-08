import './sect1.css';
import Persona from '../../../src/assets/images/winnerPanelLeft.jpg'

function Sect1() {
  return (
    <section id='section-1' className='flex flex-col md:flex-row justify-center items-center h-screen'>
      <div className='contenedor-texto md:w-[46rem] p-4 font-semibold'>
        <h1 className='text-titles'>+25.000 USD en premios *</h1>
        <br></br>
        <p>¡No te pierdas esta emocionante oportunidad de ganar de una bolsa de premios de $25000 USD!</p>
        <br></br>
        <p>Tienes varias oportunidades para ganar:</p>
        <br></br>
        <ul>
          <li>$15.000 USD en premios para el primer lugar</li>
          <li>$7.000 USD en premios para el segundo lugar</li>
          <li>$3.000 USD en premios para el tercer lugar</li>
        </ul>
        <br></br>
        <p>Todos los participantes podrán recibir un certificicado de participación y diversos privilegios ofertados por la compañia</p>
      </div>
      <div className='img-container flex justify-center'>
        <img src={ Persona } alt='Imagen de persona emocionada' className='w-5/5 rounded-[5rem] rotate-12'/>
      </div>
    </section>
  )
}

export default Sect1