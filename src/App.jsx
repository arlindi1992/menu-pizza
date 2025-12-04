import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import CardList from './components/cardlist/cardlist.jsx'
import Admin from './components/admin/admin'

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/menu' element={<CardList/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </Navbar>
      <Main />
      <Footer />
    </>
  )
}

export default App
