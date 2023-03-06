import React from 'react'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'
import { HiOutlineRefresh } from 'react-icons/hi'

const AddWeight = () => {
  return (
    <Helmet tittle='Add Weight'>
      <Header
        title='Add Weight'
        hasPrevious={true}
        icon={<HiOutlineRefresh />}
      />
    </Helmet>
  )
}

export default AddWeight
