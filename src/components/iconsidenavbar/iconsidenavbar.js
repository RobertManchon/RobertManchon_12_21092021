import React, {Component, Fragment} from 'react';
import './iconsidenavbar.css';
import {Link} from 'react-router-dom';

class IconSideNavBar extends Component {
    render() {
        return (
            <Fragment>
                <Link to='/'>
                    <img src={this.props.logo} alt="iconSideNavBar" className="iconSideNavBar"></img>
                </Link>
            </Fragment>
        )
    }
}

export default IconSideNavBar;
