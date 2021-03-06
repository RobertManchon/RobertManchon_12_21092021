import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './CustomTooltipSessionsAverage.css'

/**
 *  Class CustomTooltipSessionsAverage
 */
class CustomTooltipSessionsAverage extends Component {
  /**
   * @returns {JSX.Element|null}
   */
  render () {
    const { payload, active } = this.props

    if (active && payload) {
      return <p className='tooltipLineChart'>{`${payload[0].value} min`}</p>
    }
    return null
  }
}
/**
 *
 * @type {{payload: Requireable<any[]>, active: Requireable<boolean>}}
 */
CustomTooltipSessionsAverage.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}
export default CustomTooltipSessionsAverage
