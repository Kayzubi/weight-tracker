import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  tittle: string
}

const Helmet: FC<Props> = ({ tittle, children }) => {
  document.title = `Weight Tracker - ${tittle}`
  return <div>{children}</div>
}

export default Helmet
