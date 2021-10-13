import React, { Component } from 'react'
import './sidebar.css'
import SideBarNav from '../sidebarnav/sidebarnav'

class SideBar extends Component {
  render () {
    return (
      <section className='sideBar'>
        <SideBarNav />
        <div className='copyright'>
          <h3>Copyright, SportSee 2021</h3>
        </div>
      </section>
    )
  }
}

export default SideBar
