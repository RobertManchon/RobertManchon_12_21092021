import 'components/SideBar/SideBar.css'
import SideBarNav from 'components/SideBarNav/SideBarNav'
import React, { Component } from 'react'

/**
 * Class SideBar
 */
class SideBar extends Component {
    /**
     *
     * @returns {JSX.Element}
     */
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
