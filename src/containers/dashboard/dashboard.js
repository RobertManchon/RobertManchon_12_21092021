import React, {Component, Fragment} from 'react'
import Charts from '../../components/charts/charts'
import './dashboard.css'
import Header from '../../components/header/header'
import SideBar from '../../components/sidebar/sidebar'

class DashBoard extends Component {
  render() {
    return (
        <Fragment>
          <Header />
          <main>
            <SideBar />
            <Charts />
          </main>
        </Fragment>
    )
  }
}

export default DashBoard
