import ChartPie from 'components/Charts/ChartPie/ChartPie';
import 'containers/GoalScore/GoalScore.css';
import PropTypes from 'prop-types';
import React, { Component } from "react";

/**
 * Class GoalScore
 */
class GoalScore extends Component {
    /**
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <article className="goalPieChart">
                <h2 className="goalPieChartTitle">Score</h2>
                <ChartPie goalScoreData={this.props.goalScoreData} />
                {this.getPieChartInfos()}
            </article>
        )
    }

    /**
     * Build Pie Chart Infos
     * @returns {JSX.Element}
     */
    getPieChartInfos = () => {
        return (
            <div className="goalPieChartInfos">
                <span className="goalPieChartScoreValue">{this.props.goalScorePercentage}%</span>
                <br />
                de votre
                <br />
                objectif
            </div>
        )
    }
}

/**
 *
 * @type {{goalScoreData: Validator<NonNullable<any[]>>, goalScorePercentage: Validator<NonNullable<number>>}}
 */
GoalScore.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
    goalScorePercentage : PropTypes.number.isRequired,
}

export default GoalScore;
