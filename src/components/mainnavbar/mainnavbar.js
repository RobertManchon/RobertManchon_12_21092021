import React, {Component} from 'react';
import './mainnavbar.css';
import {Link} from 'react-router-dom';

class MainNavBar extends Component {
    render() {
        return (
            <nav className="mainNavBar">
                    <Link to="/" className="linkHeader">Accueil</Link>
                    <Link to="/" className="linkProfil">Profil</Link> 
                    <Link to="/" className="linkReglages">Réglages</Link>
                    <Link to="/" className="linkCommunaute">Communauté</Link>
            </nav>
        )
    }
}

export default MainNavBar;