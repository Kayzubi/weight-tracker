import React, { FC, ReactNode } from 'react'
import './scrolllist.scss'
interface Props {
  children: ReactNode
}

const ScrollList: FC<Props> = ({ children }) => {
  return <div className='horizontal_scroll'>{children}</div>
}

export default ScrollList
