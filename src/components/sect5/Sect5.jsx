import './sect5.css';
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Sect5() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3vlulvr', 'template_1usr1ww', form.current, 'TQ8Z_A58O1d495CB9')

    e.target.reset()
  };
  return (
    <section id='section-5' className='h-96 flex flex-col md:flex-row items-center justify-center gap-5'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-titles text-white'>Temporada de verano: Hackaton Taxis Libres</h1>
        <article className='w-[30rem] concentracion-textos'>
          <p className='text-subtitles text-white'>Este es un hackathon virtual es diseñado para la experimentación creativa, con el objetivo de reunir a desarrolladores, analistas, empresarios e innovadores para crear aplicaciones descentralizadas de alto rendimiento.</p>
          <br></br>
          <p className='text-subtitles text-white'>Esta es tu oportunidad para explorar tu potencial y construir soluciones innovadoras a problematicas reales. ¡Registrate ahora!</p>
        </article>
      </div>
      <div className='w-96'>
        <form ref={form} onSubmit={sendEmail}>
          <input className='px-4 py-2' name='name' type='text' placeholder='Escribe tu correo' required/>
          <input className='px-4 py-2' name='email' type='email' placeholder='Escribe tu nombre' required/>
          <div className='flex gap-2'>
            <input className='px-4 py-2' name='email' type='number' placeholder='Escribe tu edad' required/>
            <input className='px-4 py-2' name='email' type='email' placeholder='Escribe el # participantes' required/>
          </div>
          <button type='submit' className='btn'>¡Registrate ahora!</button>
        </form>
      </div>
    </section>
  )
}

export default Sect5