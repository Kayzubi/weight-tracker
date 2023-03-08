import React, { FC } from 'react'
import BarChart from '../Charts/BarChart'
import LineChart from '../Charts/LineChart'
import './infochart.scss'

interface Props {
  isBarchart?: boolean
  barColor?: string
}

const InfoChart: FC<Props> = ({ isBarchart, barColor }) => {
  return (
    <div className='infochart'>
      <div className='children'>
        <div className='infochart__details'>
          <p className='infochart__label'>Weight</p>
          <span className='infochart__value'>
            <h1>52,6</h1>
            <small>kg</small>
          </span>
        </div>
        <div className='infochart__chart'>
          {isBarchart ? <BarChart /> : <LineChart />}
        </div>
      </div>
    </div>
  )
}

export default InfoChart
