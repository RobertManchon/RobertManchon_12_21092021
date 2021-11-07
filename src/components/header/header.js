import 'components/Header/Header.css'
import { Link } from 'react-router-dom'
import logo from 'assets/logo/logo.png'
import MainNavBar from 'components/MainNavBar/MainNavBar'
import React, { Component } from 'react'
/**
 * Header component, contains a logo that will redirect to Homepage.
 */

class Header extends Component {
    /**
     *
     * @returns {JSX.Element}
     */
    render () {
        return (
            <header className='header'>
                <Link to='/'>
                    <img src={logo} alt='logoHeader' className='logoHeader' />
                </Link>
                <MainNavBar />
            </header>
        )
    }
}

export default Header
