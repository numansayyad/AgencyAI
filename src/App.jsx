//race is used to create a bilerplate code.
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'

const App = () => {
    // Initialize theme from localStorage, default to 'light'

  const [theme, setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
    <Hero/>
        {/* <Services/> */}

    <TrustedBy/>
    </div>
  )
}

export default App
