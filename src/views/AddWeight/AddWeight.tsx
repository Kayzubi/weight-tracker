import React from 'react'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'
import { HiOutlineRefresh } from 'react-icons/hi'
import { Container } from 'reactstrap'

const AddWeight = () => {
  return (
    <Helmet tittle='Add Weight'>
      <Container>
        <Header
          title='Add Weight'
          hasPrevious={true}
          icon={<HiOutlineRefresh />}
        />
      </Container>
    </Helmet>
  )
}

export default AddWeight
