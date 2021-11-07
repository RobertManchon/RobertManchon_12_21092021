import 'components/ErrorModal/ErrorModal.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Loader from 'components/Loader/Loader'

/**
 * Class ErrorModal
 *
 */
class ErrorModal extends Component {
  /**
   *
   * @returns {JSX.Element}
   */
  render () {
    return (
        <section className='errorModalBackground'>
          <div className='errorModalContent'>
            <div className='errorModalBody'>
              <h3>Petit problème... Une erreur s'est produite.</h3>
              <p>{this.props.message}</p>
              <Loader />
            </div>
          </div>
        </section>
    )
  }
}

/**
 *
 * @type {{message: Requireable<string>}}
 */
ErrorModal.propTypes = {
  message: PropTypes.string
}

export default ErrorModal
