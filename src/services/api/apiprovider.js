import ApiFormatter from './ApiFormatter'
import axios from 'axios'

/**
 *  Class API Provider
 */
class ApiProvider {
    constructor () {
        this.baseUrl = 'http://localhost:3000'

    }

    /**
     * Fetch USER_MAIN_DATA from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getMainData (id) {
        let data = {}
        const url = `${this.baseUrl}/user/${id}`

        await axios.get(url)
            .then(function (response) {
                //console.log("Réponse brute Requête get user-id:",JSON.parse(JSON.stringify(response)))
                console.log("Réponse brute Requête get user-id:",response)
                data = ApiFormatter.getMainDataFormat(response)
            })
        //console.log("Réponse formatée Requête get user-id:",JSON.parse(JSON.stringify(data)))
        console.log("Réponse formatée Requête get user-id:",data)
        return data
    }

    /**
     * Fetch USER_ACTIVITY from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserDailyActivityData (id) {
        let data = {}
        const url = `${this.baseUrl}/user/${id}/activity`

        await axios.get(url)
            .then(function (response) {
                data = ApiFormatter.getDailyActivityDataFormat(response)
            })
        return data
    }

    /**
     * Fetch USER_AVERAGE_SESSIONS from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserAverageSessionData (id) {
        let data = {}
        const url = `${this.baseUrl}/user/${id}/average-sessions`

        await axios
            .get(url)
            .then(function (response) {
                data = ApiFormatter.getUserAverageDataFormat(response)
            })
        return data
    }

    /**
     * Fetch USER_PERFORMANCE from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserPerformanceData (id) {
        let data = {}
        const url = `${this.baseUrl}/user/${id}/performance`

        await axios
            .get(url)
            .then(function (response) {
                data = ApiFormatter.getPerformanceAverageDataFormat(response)
            })
        return data
    }
}

export default ApiProvider
