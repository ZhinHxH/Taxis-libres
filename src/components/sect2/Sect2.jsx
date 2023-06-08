import './sect2.css';
import CardItem from './CardItem';

function Sect2() {
  return (
    <section id='section-2' className='flex flex-col md:flex-row justify-center items-center h-screen'>
      <div className='font-semibold flex flex-col justify-end items-center gap-8'>
        <h1 className='text-titles'>Manos a la obra</h1>
        <p className='text-subtitles px-4 text-center md:w-3/4'>Transforma tus ideas en soluciones tangibles de la manera que creas más conveniente. ¡Participa en el mayor Hackaton de Colombia!</p>
        <div className='grid grid-flow-dense md:grid-cols-2 w-full place-items-center gap-10 md:gap-0'>
        <div className="v-line"></div>
          <CardItem />
        </div>
      </div>
    </section>
  )
}

export default Sect2