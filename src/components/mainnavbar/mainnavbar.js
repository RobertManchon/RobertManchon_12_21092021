import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import 'components/MainNavBar/MainNavBar.css'

/**
 *  Class MainNavBar
 *  Simple set up of  links of the Main Navigation Bar
 *  are empty for the time being
 */
class MainNavBar extends Component {
  /**
     *
     * @returns {JSX.Element}
     */
  render () {
    return (
      <nav className='mainNavBar'>
        <Link to='/' className='linkHeader'>Accueil</Link>
        <Link to='/' className='linkProfil'>Profil</Link>
        <Link to='/' className='linkReglages'>Réglages</Link>
        <Link to='/' className='linkCommunaute'>Communauté</Link>
      </nav>
    )
  }
}

export default MainNavBar
