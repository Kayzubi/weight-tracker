import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Dashboard from '../views/Dashboard/Dashboard'
import History from '../views/History/History'
import Welcome from '../components/WelcomePage/Welcome'
const Router = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-weight' element={<h1>Add Weight</h1>} />
        <Route path='/history' element={<History />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
