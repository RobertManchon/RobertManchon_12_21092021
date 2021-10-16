import axios from 'axios';
import MockDataFormatter from './mockdataformatter'
import { USER_ACTIVITY } from './mockeddata'
import { USER_AVERAGE_SESSIONS } from './mockeddata'
import { USER_MAIN_DATA } from './mockeddata'
import { USER_PERFORMANCE } from './mockeddata'

class MockDataProvider {
    // MAIN DATA
    async getMainData() {
        const data = {};

        await fetch(USER_MAIN_DATA[0])
        .then(function (response) {
            data.content = MockDataFormatter.getMainDataFormat(response);
        })
        return data;
    }

    // DAILYACTIVITY
    async getUserDailyActivityData() {
        const data = {};

        await axios.get(USER_ACTIVITY)
        .then(function (response) {
            data.content = MockDataFormatter.getDailyActivityDataFormat(response);
        })
        return data;
    }

    // AVERAGESESSIONS
    async getUserAverageSessionData() {
        const data = {};

        await axios
            .get(USER_AVERAGE_SESSIONS)
            .then(function (response) {
                data.content = MockDataFormatter.getUserAverageDataFormat(response);
            })
        return data;
    }

    // PERFORMANCE
    async getUserPerformanceData() {
        const data = {};

        await axios
            .get(USER_PERFORMANCE)
            .then(function (response) {
                data.content = MockDataFormatter.getPerformanceAverageDataFormat(response);
            })
        return data;
    }
}

export default MockDataProvider;
