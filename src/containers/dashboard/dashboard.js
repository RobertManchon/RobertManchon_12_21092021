import React, { Component, Fragment } from 'react'
import './dashboard.css'

import Header from '../../components/header/header'
import SideBar from '../../components/sidebar/sidebar'

// CHARTS
import Welcome from '../../components/welcome/welcome'
import DailyActivityBarChart from '../../components/charts/dailyactivitybarchart/dailyactivitybarchart'
import UserAverageLineChart from '../../components/charts/useraveragelinechart/useraveragelinechart'
import PerformanceAverageRadarChart from '../../components/charts/performanceaverageradarchart/performanceaverageradarchart'
import GoalPieChart from '../../components/charts/goalpiechart/goalpiechart'

// DATA
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../services/mocks/mockeddata'

class DashBoard extends Component {
  render () {
    return (
      <>
        <Header />
        <main>
          <SideBar />
          <section className='charts'>
            <Welcome name={USER_MAIN_DATA[0].userInfos.firstName} />
            <DailyActivityBarChart data={USER_ACTIVITY[0].sessions} />
            <section className='chartsHorizontal'>
              <UserAverageLineChart data={USER_AVERAGE_SESSIONS[0]} />
              <PerformanceAverageRadarChart data={USER_PERFORMANCE} />
              <GoalPieChart data={USER_MAIN_DATA} />
            </section>
          </section>
        </main>
      </>
    )
  }
}

export default DashBoard
