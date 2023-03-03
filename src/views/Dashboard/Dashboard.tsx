import React from 'react'
import { Container } from 'reactstrap'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'

const Dashboard = () => {
  return (
    <Helmet tittle='Dashboard'>
      <Container>
        <Header
          hasPrevious={false}
          title='My Activity'
          icon={<img src='' alt='user pic' />}
        />
      </Container>
    </Helmet>
  )
}

export default Dashboard
