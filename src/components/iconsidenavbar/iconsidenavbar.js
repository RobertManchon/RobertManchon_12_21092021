import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

/**
 * Class IconSideNavBar
 */
class IconSideNavBar extends Component {
    render () {
        return (
            <>
                <Link to='/'>
                    <img src={this.props.logo} alt='iconSideNavBar' className='iconSideNavBar' />
                </Link>
            </>
        )
    }
}

/**
 *
 * @type {{logo: Validator<NonNullable<string>>}}
 */
IconSideNavBar.propTypes = {
    logo: PropTypes.string.isRequired
}

export default IconSideNavBar
