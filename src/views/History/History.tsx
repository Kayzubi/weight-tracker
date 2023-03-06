import React from 'react'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'
import { HiOutlineRefresh } from 'react-icons/hi'
import { formatDate } from '../../helpers'

const History = () => {
  const { dayAndMonth } = formatDate(new Date())

  return (
    <Helmet tittle='History'>
      <Header hasPrevious={false} title='History' icon={<HiOutlineRefresh />} />
      <section>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='heading_secondary'>{dayAndMonth}</h1>
        </div>
      </section>
    </Helmet>
  )
}

export default History
