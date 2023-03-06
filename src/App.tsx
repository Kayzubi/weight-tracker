import React from 'react'
import './App.scss'
import Router from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Container } from 'reactstrap'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Container className='app_container '>
          <Router />
          <Navbar />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
