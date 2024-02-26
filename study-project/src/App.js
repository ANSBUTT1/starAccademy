import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Courses from './assets/components/Courses'
import Reviews from './assets/components/Reviews'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'



const App = () => {
  return (
    <div >
      <Navbar/>
      <main>
        <div id='home'>
        <Home/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div className='courses'>
          <Courses/>
        </div>
        <div id='reviews'>
          <Reviews/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App