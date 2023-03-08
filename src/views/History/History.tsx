import React from 'react'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'
import { HiOutlineRefresh } from 'react-icons/hi'
import { formatDate } from '../../helpers'
import InfoChart from '../../components/InfoChart/InfoChart'
import ScrollList from '../../components/ScrollList/ScrollList'
import { motion } from 'framer-motion'

const History = () => {
  const { dayAndMonth } = formatDate(new Date())

  return (
    <Helmet tittle='History'>
      <Header
        hasPrevious={false}
        title='History'
        icon={
          <motion.span animate={{ rotate: 360 }}>
            <HiOutlineRefresh size={32} />
          </motion.span>
        }
      />
      <section>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='heading_secondary'>{dayAndMonth}</h1>
        </div>

        <InfoChart />
        <InfoChart />
        <ScrollList>
          <InfoChart isBarchart={true} barColor='#7b66ff' />
          <InfoChart isBarchart={true} barColor='#c3ff4d' />
        </ScrollList>
      </section>
    </Helmet>
  )
}

export default History
