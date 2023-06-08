import './App.css'
import NavBar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Sect1 from './components/sect1/Sect1';
import Sect2 from './components/sect2/Sect2';
import Sect3 from './components/sect3/Sect3';
import Sect4 from './components/sect4/Sect4';
import Sect5 from './components/sect5/Sect5';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Sect1 />
        <Sect2 />
        <Sect3 />
        <Sect4 />
        <Sect5 />
        <Footer />
      </div>
    </>
  )
}

export default App
