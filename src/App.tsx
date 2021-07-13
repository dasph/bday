import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Particles, { IOptions, RecursivePartial } from 'react-tsparticles'

import { Home } from './views/Home'
import { particlesOpstions } from './utils'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Particles options={particlesOpstions as RecursivePartial<IOptions> } />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}
