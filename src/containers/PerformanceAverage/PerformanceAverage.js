import ApiProvider from 'services/Api/ApiProvider';
import ChartRadar from 'components/Charts/ChartRadar/ChartRadar';
import Loader from 'components/Loader/Loader';
import 'containers/PerformanceAverage/PerformanceAverage.css';
import PropTypes from 'prop-types';
import React, { Component } from "react";

/**
 * Class PerformanceAverage
 */
class PerformanceAverage extends Component {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            performanceAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserPerformanceData(this.state.id)
        .then((response) => {
            this.setState({
                loading: false,
                performanceAverageData: response,
            });
        });
    }

    /**
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <article className="performanceRadarChart">
                {this.state.loading 
                ? <Loader />
                : <ChartRadar performanceAverageData={this.state.performanceAverageData} />
                }
            </article>
        )
    }
}

/**
 *
 * @type {{id: Validator<NonNullable<string>>}}
 */
PerformanceAverage.propTypes = {
    id : PropTypes.string.isRequired,
}

export default PerformanceAverage;
