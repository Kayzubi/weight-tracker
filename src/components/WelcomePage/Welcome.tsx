import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/dashboard')
  }, 3000)
  return (
    <div>
      <h1 className='heading_primary'>Welcome</h1>
    </div>
  )
}

export default Welcome
