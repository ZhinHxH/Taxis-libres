/* eslint-disable react/jsx-key */
import './navbar.css';
import Logo from '../../../src/assets/images/logo-escritorio.webp';
import { SlArrowDown } from 'react-icons/sl'


function NavBar() {
  return (
    <div id='navegation-bar' className='sticky z-50 top-0'>
      <nav className='navbar-1 h-16 flex justify-center items-center gap-10'>
        <img src={ Logo } alt='Logo de la empresa' className='h-9'/>
        <ul className='flex gap-12'>
          <li><a href='#Nosotros' className='flex gap-1 items-end'>Nosotros<SlArrowDown /></a>
            <ul>
              <li><a href='#Emisora'>Emisora Taxis Libres</a></li>
            </ul>
          </li>
          <li><a href='#Viajeros' className='flex gap-1 items-end'>Viajeros<SlArrowDown /></a>
            <ul>
              <li><a href='#Descargar'>Descarga la App</a></li>
              <li><a href='#Wa-link'>Taxi por WhastApp</a></li>
            </ul>
          </li>
          <li><a href='#Empleados' className='flex gap-1 items-end'>Empresas</a></li>
          <li><a href='#Vinculados' className='flex gap-1 items-end'>Vinculados<SlArrowDown /></a>
            <ul>
              <li><a href='#'>Conductores</a></li>
              <li><a href='#'>Propietarios</a></li>
              <li><a href='#'>Beneficios</a></li>
              <li><a href='#'>Mi perfil</a></li>
              <li><a href='#'>Taxis disponibles</a></li>
            </ul>
          </li>
          <li><a href='#Ciudades' className='flex gap-1 items-end'>Ciudades<SlArrowDown /></a>
            <ul>
              <li><a href='#Bogota'>Bógota</a></li>
              <li><a href='#Cali'>Cali</a></li>
              <li><a href='#Medellín'>Medellín</a></li>
              <li><a href='#Bucaramanga'>Bucaramanga</a></li>
              <li><a href='#Cucuta'>Cúcuta</a></li>
              <li><a href='#Manizales'>Manizales</a></li>
            </ul>
          </li>
          <li><a href='#Más' className='flex gap-1 items-end'>Más<SlArrowDown /></a>
            <ul>
              <li><a href='#Blog'>Blog</a></li>
              <li><a href='#Trabajos'>Trabajos disponibles</a></li>
              <li><a href='#Sedes'>Sedes Bógota</a></li>
              <li><a href='#Centros'>Centros de conocimiento</a></li>
              <li><a href='#Podcast'>Podcast</a></li>
            </ul>
          </li>
          <li><a href='#Ayuda' className='flex gap-1 items-end'>Ayuda</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar