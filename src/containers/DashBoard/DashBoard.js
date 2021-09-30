import React, {Component, Fragment} from 'react';
import './DashBoard.css';

import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';

class DashBoard extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
