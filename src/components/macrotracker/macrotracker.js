import Loader from 'components/Loader/Loader';
import 'components/MacroTracker/MacroTracker.css';
import React, { Component } from "react";
import PropTypes from 'prop-types';

/**
 * Class MacroTracker
 */
class MacroTracker extends Component {
    state = {
        loading : true,
    }

    /**
     * Fetching data from API and fill states
     */
    componentDidMount() {
        fetch(this.props.data)
        .then(
            this.setState({
                loading: false,
            })
        );
    }

    /**
     *
     * @returns {JSX.Element}
     */
    render() {
        return this.state.loading ?
        (
            <div className="macroTracker">
                <Loader />
            </div>
        )
        : (
            <div className="macroTracker">
                <div className={'macroTrackerContainerImg' + this.props.name} >
                    <img className={'macroTrackerImg' + this.props.name} src={this.props.icon} alt=""/>
                </div>
                <div className="macroTrackerTxt">
                    <p className="macroTrackerQuantity">{this.props.data} {this.props.unitOfMeasure}</p>
                    <p className="macroTrackerType">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

/**
 *
 * @type {{data: Requireable<number>, unitOfMeasure: Validator<NonNullable<string>>, icon: Validator<NonNullable<string>>, name: Validator<NonNullable<string>>}}
 */
MacroTracker.propTypes = {
    data : PropTypes.number,
    icon : PropTypes.string.isRequired,
    unitOfMeasure : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}

export default MacroTracker;
