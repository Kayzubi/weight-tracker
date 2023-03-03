import React, { FC, ReactNode } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  icon: ReactNode
  hasPrevious: boolean
}

const Header: FC<Props> = ({ title, icon, hasPrevious }) => {
  const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center gap-4'>
        {hasPrevious && (
          <span onClick={() => navigate(-1)}>
            <MdArrowBackIosNew />
          </span>
        )}
        <h1 className='heading_primary'>{title}</h1>
      </div>
      <div>{icon}</div>
    </div>
  )
}

export default Header
