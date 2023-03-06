import React, { FC, ReactNode } from 'react'
import './infocard.scss'

interface Props {
  children: ReactNode
  icon: ReactNode
}

const InfoCard: FC<Props> = ({ children, icon }) => {
  return (
    <div className='info_card'>
      <div className='children'>
        <span className='info_card--icon'>{icon}</span>
        <div className='info_card--details'>{children}</div>
      </div>
    </div>
  )
}

export default InfoCard
