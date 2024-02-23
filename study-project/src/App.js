import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'



const App = () => {
  return (
    <div >
      <Navbar/>
      <main>
        <div id='home'>
        <Home/>
        </div>
      </main>
    </div>
  )
}

export default App