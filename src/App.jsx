import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Main from './components/main/main.jsx'
import Card from './components/cards/card.jsx'
import Cardlist from './components/cardlist/cardlist.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
