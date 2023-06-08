import './header.css';

function Header() {
  return (
    <section id='header' className='h-80 xm:h-[22rem] md:h-96 lg:h-[34rem]'>
      <div className='panel-home flex items-end justify-center h-full xm:text-md lg:text-xl'>
        <div className='panel-home-content flex flex-col items-center justify-center text-center md:gap-2 lg:mb-10 md:mb-5 xm:mb-2'>
          <p className='text-paragraph'>Genera aplicaciones de alto impacto dando solución a problematicas reales de movilidad.</p>
          <a href='#registrarse' className='btn text-sm'>Registrate ahora</a>
        </div>
      </div>
    </section>
  )
}

export default Header