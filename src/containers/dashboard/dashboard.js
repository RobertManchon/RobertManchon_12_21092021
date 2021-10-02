import React, {Component, Fragment} from 'react';
import './dashboard.css';

import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';

// CHARTS
import Welcome from '../../components/welcome/welcome';
import DailyActivityBarChart from '../../components/charts/dailyactivitybarchart/dailyactivitybarchart';
import UserAverageLineChart from '../../components/charts/useraveragelinechart/useraveragelinechart';

// DATA
import { USER_MAIN_DATA } from '../../services/mocks/mockeddata';
import { USER_ACTIVITY } from '../../services/mocks/mockeddata';
import { USER_AVERAGE_SESSIONS } from '../../services/mocks/mockeddata';

class DashBoard extends Component {
    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <section className="charts">
                        <Welcome name={USER_MAIN_DATA[0].userInfos.firstName}/>
                        <DailyActivityBarChart data={USER_ACTIVITY[0].sessions}/>
                        <section className="chartsHorizontal">
                            <UserAverageLineChart data={USER_AVERAGE_SESSIONS[0]}/>
                        </section>
                    </section>
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
