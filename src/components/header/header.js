import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import MainNavBar from '../mainnavbar/mainnavbar'
import logo from '../../assets/logo/logo.png'



class Header extends Component {
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
