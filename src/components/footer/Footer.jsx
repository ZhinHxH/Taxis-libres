import './footer.css';
import Logo2 from '../../../src/assets/images/logo-taxislibres.webp';

function Footer() {
  return (
    <div id='footer' className='w-full h-20 bg-black flex flex-col md:flex-row gap-10 justify-center items-center'>
      <img src={Logo2} alt='Logo de la empresa taxis libres sin color' className='h-10'/>
      <a href='#Avisolegal' className='text-md'>Aviso legal</a>
      <a href='#PoliticaDatos' className='text-md'>Política de tratamiento de datos</a>
      <a href='#AvisolegalPagina' className='text-md'>Aviso legal de la página</a>
      <small className='text-white text-md'>&copy; ZhinHxH. All rights reserved</small>
    </div>
  )
}

export default Footer