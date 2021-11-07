import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'components/Welcome/Welcome.css'

/**
 * Class Welcome
 */
class Welcome extends Component {
    /**
     *
     * @returns {JSX.Element}
     */
    render () {
        return (
            <section className='welcome'>
                <h1>Bonjour <span className='welcomeTxtColored'>{this.props.welcomeData}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
        )
    }
}

/**
 *
 * @type {{welcomeData: Requireable<string>}}
 */
Welcome.propTypes = {
    welcomeData: PropTypes.string
}

export default Welcome
