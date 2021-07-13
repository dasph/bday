import React from 'react'

import { Route } from 'react-router-dom'
import { Card } from '../components/Card'
import { Center } from '../components/Center'

export const Home = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Route path='/:userName/:userAge' component={() => <Center><Card /></Center>} />
    </main>
  )
}
