import React, { Component } from 'react'
import 'components/SideBarNav/SideBarNav.css'

import bike from 'assets/sideNavBar/bike.png'
import IconSideNavBar from 'components/IconSideNavBar/IconSideNavBar'
import swim from 'assets/sideNavBar/swim.png'
import weight from 'assets/sideNavBar/weight.png'
import yoga from 'assets/sideNavBar/yoga.png'
/**
 * Class SideBarNav
 * Side Nav component, side navigation to navigate to different menu.
 * For the time being, links are empty.
 * */
class SideBarNav extends Component {
  /**
   *
   * @returns {JSX.Element}
   */
  render () {
    return (
        <nav className='sideBarNav'>
          <ul className='sideBarUl'>
            <li className='borderLogoSideBar'>
              <IconSideNavBar logo={yoga} />
            </li>
            <li className='borderLogoSideBar'>
              <IconSideNavBar logo={swim} />
            </li>
            <li className='borderLogoSideBar'>
              <IconSideNavBar logo={bike} />
            </li>
            <li className='borderLogoSideBar'>
              <IconSideNavBar logo={weight} />
            </li>
          </ul>
        </nav>
    )
  }
}

export default SideBarNav
