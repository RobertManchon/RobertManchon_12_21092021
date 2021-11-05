import { BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import CustomTooltipDailyActivity from 'components/Charts/CustomTooltip/CustomTooltipDailyActivity/CustomTooltipDailyActivity'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

/**
 * Class CharBar
 */
class ChartBar extends Component {
  /**
     * Build Bar Chart
     * @returns {JSX.Element}
     */
  render () {
    return (
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart
          data={this.props.dailyActivityData}
          margin={{
            top: 50,
            right: 10,
            left: 40,
            bottom: 5
          }}
          barCategoryGap={35}
          barGap={8}
        >
          <CartesianGrid
            strokeDasharray='3 3'
            vertical={false}
          />
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
          />
          <YAxis
            dataKey='kilogram'
            yAxisId='left'
            orientation='right'
            stroke='#8884d8'
            interval='number'
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 14, fill: '#74798c' }}
            tickCount={8}
            domain={[this.props.minimumYaxisKg, this.props.maximumYaxisKg]}
          />
          <YAxis
            dataKey='calories'
            yAxisId='right'
            orientation='right'
            stroke='#82ca9d'
            hide
            domain={[this.props.minimumYaxisKcal, this.props.maximumYaxisKcal]}
          />
          <Tooltip content={<CustomTooltipDailyActivity />} cursor={{ fill: '#e0e0e0' }} />
          <Bar
            yAxisId='left'
            dataKey='kilogram'
            fill='#000'
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId='right'
            dataKey='calories'
            fill='#e60000'
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

/**
 *
 * @type {{minimumYaxisKg: Validator<NonNullable<number>>, minimumYaxisKcal: Validator<NonNullable<number>>, maximumYaxisKcal: Validator<NonNullable<number>>, dailyActivityData: Validator<NonNullable<any[]>>, maximumYaxisKg: Validator<NonNullable<number>>}}
 */
ChartBar.propTypes = {
  dailyActivityData: PropTypes.array.isRequired,
  minimumYaxisKg: PropTypes.number.isRequired,
  maximumYaxisKg: PropTypes.number.isRequired,
  minimumYaxisKcal: PropTypes.number.isRequired,
  maximumYaxisKcal: PropTypes.number.isRequired
}

export default ChartBar
