import React from 'react'
import Header from '../../components/Header/Header'
import Helmet from '../../components/Helmet/Helmet'
import InfoCard from '../../components/InfoCard/InfoCard'
import ScrollList from '../../components/ScrollList/ScrollList'
import { IoFootstepsOutline, IoWatchOutline } from 'react-icons/io5'
import { HiOutlineFire } from 'react-icons/hi'
import { MdOutlineDirectionsBike, MdOutlinePlayCircle } from 'react-icons/md'
import BarChart from '../../components/Charts/BarChart'
import ScaleDiv from '../../components/Shared/ScaleDiv'

const Dashboard = () => {
  return (
    <Helmet tittle='Dashboard'>
      <Header
        hasPrevious={false}
        title='My Activity'
        icon={<img src='' alt='user pic' />}
      />
      <ScaleDiv>
        <ScrollList>
          <InfoCard
            icon={<HiOutlineFire />}
            children={
              <>
                <h1>866</h1>
                <small>Calories burn</small>
              </>
            }
          />
          <InfoCard
            icon={<IoFootstepsOutline />}
            children={
              <>
                <h1>7 579</h1>
                <small>Steps</small>
              </>
            }
          />
          <InfoCard
            icon={<IoWatchOutline />}
            children={
              <>
                <span className='d-flex align-items-end gap-2'>
                  <h1>27</h1>
                  <small>mins</small>
                </span>
                <small>Left today</small>
              </>
            }
          />
        </ScrollList>
      </ScaleDiv>
      <section>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='heading_secondary'> Goals for the week</h1>
          <small>42 of 55</small>
        </div>
        <div className='overview_chart'>
          <BarChart />
        </div>
      </section>
      <section>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h1 className='heading_secondary'> Trending Workouts</h1>
          <small>See all</small>
        </div>

        <ScaleDiv classname='mt-3 mb-3'>
          <InfoCard
            icon={<MdOutlineDirectionsBike />}
            children={
              <div className='d-flex align-items-center justify-content-between w-100'>
                <p>Muscle builder</p>
                <MdOutlinePlayCircle size={40} style={{ fill: '#c3ff4d' }} />
              </div>
            }
          />
        </ScaleDiv>
        <ScaleDiv classname='mt-3 mb-3'>
          <InfoCard
            icon={<MdOutlineDirectionsBike />}
            children={
              <div className='d-flex align-items-center justify-content-between w-100'>
                <p>Muscle builder</p>
                <MdOutlinePlayCircle size={40} style={{ fill: '#c3ff4d' }} />
              </div>
            }
          />
        </ScaleDiv>
        <ScaleDiv classname='mt-3 mb-3'>
          <InfoCard
            icon={<MdOutlineDirectionsBike />}
            children={
              <div className='d-flex align-items-center justify-content-between w-100'>
                <p>Muscle builder</p>
                <MdOutlinePlayCircle size={40} style={{ fill: '#c3ff4d' }} />
              </div>
            }
          />
        </ScaleDiv>
      </section>
    </Helmet>
  )
}

export default Dashboard
