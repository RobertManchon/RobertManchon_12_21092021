import Charts from '../Charts/Charts';
import 'containers/DashBoard/DashBoard.css';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import SideBar from 'components/SideBar/SideBar';

/**
 * Class Dashboard
 */
class DashBoard extends Component {
    state = {
        id : this.props.id,
    }

    /**
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <Charts id={this.state.id} />
                </main>
            </Fragment>
        )
    }
}

/**
 *
 * @type {{id: Validator<NonNullable<string>>}}
 */
DashBoard.propTypes = {
    id : PropTypes.string.isRequired,
}

export default DashBoard;
