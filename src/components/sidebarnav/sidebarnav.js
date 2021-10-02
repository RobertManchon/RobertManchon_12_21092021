import React, {Component} from 'react';
import './sidebarnav.css';

import yoga from '../../assets/sidenavbar/yoga.png';
import swim from '../../assets/sidenavbar/swim.png';
import bike from '../../assets/sidenavbar/bike.png';
import weight from '../../assets/sidenavbar/weight.png';

import IconSideNavBar from '../iconsidenavbar/iconsidenavbar';

class SideBarNav extends Component {
    render() {
        return (
            <nav className="sideBarNav">
                <ul className="sideBarUl">
                    <li className="borderLogoSideBar">
                        <IconSideNavBar logo={yoga}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <IconSideNavBar logo={swim}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <IconSideNavBar logo={bike}/>
                    </li>
                    <li className="borderLogoSideBar">
                        <IconSideNavBar logo={weight}/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default SideBarNav;
