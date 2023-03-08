import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  classname?: string
  children: ReactNode
}

const ScaleDiv: FC<Props> = ({ children, classname }) => {
  return (
    <motion.div
      className={classname}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  )
}

export default ScaleDiv
