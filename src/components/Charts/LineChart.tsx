import React from 'react'
import './linechart.scss'

const LineChart = () => {
  const yValues = [2, 4, 6, 8, 10, 12]
  const dataSet = [
    {
      value: 5,
      label: 'Mon',
    },
    {
      value: 6,
      label: 'Tue',
    },
    {
      value: 3,
      label: 'Wed',
    },
    {
      value: 5,
      label: 'Thu',
    },
    {
      value: 6,
      label: 'Fri',
    },
    {
      value: 5,
      label: 'Sat',
    },
    {
      value: 8,
      label: 'Sun',
    },
  ]

  const maxIndex = yValues.length - 1
  const maxValue = yValues[maxIndex]
  return (
    <div className='linechart'>
      <div className='y_axis'>
        {yValues.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className='data_set'>
        {dataSet.map((item, index: number) => (
          <div key={item.label} className='data'>
            <div
              className={`data-bar data-bar-${index} `}
              style={{ bottom: `${(item.value / maxValue) * 100}%` }}></div>
            <span className='data-label'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineChart
