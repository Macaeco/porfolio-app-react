import './App.css';
import Header from './share/header';
import Home from './pages/home';
import Aos from 'aos';
import { useEffect } from 'react';
import Sticky from 'sticky-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './share/footer';
import AboutMe from './pages/about-me';
import Experience from './pages/experience';
import FormContact from './components/contact-form';
import CardsHome from './components/cardsHome';
import ExportPDF from './pages/prueba';


function App() {

  useEffect(() => {
    Aos.init({
      once: true,
      // disable: 'phone',
      disable: false,
      duration: 700,
      easing: 'ease-out-cubic',
    })
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });
  return (


    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
        <Route path="/experience" element={<Experience ></Experience >}></Route>
        <Route path="/contact" element={<FormContact ></FormContact >}></Route>
        <Route path="/card" element={<CardsHome ></CardsHome >}></Route>
        <Route path="/cv" element={<ExportPDF ></ExportPDF >}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    

  );
}

export default App;
