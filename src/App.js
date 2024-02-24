import React, { useEffect, useState } from 'react';
import './App.css';
import { Contexts } from './context/Context';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Point from './components/Point/Point';
import Feature from './components/Features/Feature';
import Testimonials from './components/Testimonial/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import Demo from './components/Demo/Demo';

function App() {

  const [activeMenu, setActiveMenu] = useState('Home')
  const [mdl, setMdl] = useState(false)
  const [type, setType] = useState('password')
  const [eye, setEye] = useState("fa-solid fa-eye")
  const [contype, consetType] = useState('password')
  const [coneye, consetEye] = useState("fa-solid fa-eye")
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const [demo, setDemo] = useState(false)

  const [backToTop, setBackToTop] = useState(false)

  const scrollToTop = () => {
    document.querySelector('body').scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', function() {

      if (this.scrollY < 2000) {
        setBackToTop('backToTop')
      } 
      else if (this.scrollY > 5000) {
        setBackToTop('backToTop')
      }
      else {
        setBackToTop('backToTopTwo')
      }

    })
  })

  return (
    <div className="App">
      <Contexts.Provider value={{activeMenu, setActiveMenu, mdl, setMdl, type, setType, eye, setEye, login, setLogin, contype, consetType, coneye, consetEye, signup, setSignup, demo, setDemo}}>
        <Navbar/>
        {
          mdl && <Modal/>
        }
        {
          signup && <Signup/>
        }
        {
          demo && <Demo/>
        }
        <Header/>
        <Main/>
        <Point/>
        <Feature/>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
      </Contexts.Provider>

      <div className={backToTop} onClick={scrollToTop}>
        <i class="fa-solid fa-angles-up fa-shake"></i>
      </div>

    </div>
  );
}

export default App;