import React from 'react'
import './barchart.scss'
import { motion, AnimatePresence } from 'framer-motion'

const BarChart = () => {
  const yValues = [2, 4, 6, 8, 10, 12]
  const dataSet = [
    {
      value: 10,
      label: 'Mon',
    },
    {
      value: 4,
      label: 'Tue',
    },
    {
      value: 3,
      label: 'Wed',
    },
    {
      value: 8,
      label: 'Thu',
    },
    {
      value: 5,
      label: 'Fri',
    },
    {
      value: 7,
      label: 'Sat',
    },
    {
      value: 2,
      label: 'Sun',
    },
  ]

  const maxIndex = yValues.length - 1
  const maxValue = yValues[maxIndex]

  return (
    <AnimatePresence>
      <div className='barchart'>
        <div className='barchart_section'>
          <div className='y_axis'>
            {yValues.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className='data_set'>
            {dataSet.map((item) => (
              <div key={item.label} className='data'>
                <motion.div
                  initial={{ height: '0' }}
                  animate={{ height: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 2 }}
                  className='data-bar'></motion.div>
                <span className='data-label'>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default BarChart
