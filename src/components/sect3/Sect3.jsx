import './sect3.css';
import CardTem from './CardTem';

function Sect3() {
  return (
    <section id='section-3' className='flex flex-col md:flex-row justify-center items-center h-screen'>
      <article className='font-semibold flex flex-col justify-end items-center gap-8'>
        <h1 className='text-titles'>Tematicas</h1>
        <p className='text-subtitles px-4 text-center md:w-3/4'>Este evento de programación masivo tendrá cuatro temas principales: Transporte seguro, acuerdos  de transporte, logística en ciudades inteligentes, protección ambiental. En adición, tendrás a nuestra comunidad experta de mentores, monitores y patrocinadores, para asistirte en convertir tus ideas en realidad.</p>
        <div className='grid grid-flow-dense lg-v:grid-cols-3 w-4/5 place-items-center gap-10 md:gap-0'>
          <CardTem />
        </div>
      </article>
    </section>
  )
}

export default Sect3