import ApiProvider from "services/Api/ApiProvider";
import ChartLine from "components/Charts/ChartLine/ChartLine";
import Loader from 'components/Loader/Loader';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import 'containers/SessionsAverage/SessionsAverage.css';

/**
 * Class SessionsAverage
 */
class SessionsAverage extends Component {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            userAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserAverageSessionData(this.state.id)
        .then((response) => {
            this.setState({
                loading: false,
                userAverageData: response,
            });
        });
    }

    /**
     *
     * @returns {JSX.Element}
     */
    render() {
        return this.state.loading ? 
        (
            <article className="sessionsLineChart">
                <Loader />
            </article>
        )
        : (
            <article className="sessionsLineChart">
                {this.getHeaderLineChart()}
                <ChartLine userAverageData = {this.state.userAverageData} />
            </article>
        )
    }

    /**
     * Build Header Line Chart
     * @returns {JSX.Element}
     */
    getHeaderLineChart = () => {
        return (
            <header>
                <h2 className="sessionsLineChartTitle">
                    Durée moyenne des
                        <br />
                    sessions
                </h2>
            </header>
        )
    }
}

/**
 *
 * @type {{id: Validator<NonNullable<string>>}}
 */
SessionsAverage.propTypes = {
    id : PropTypes.string.isRequired,
}

export default SessionsAverage;
