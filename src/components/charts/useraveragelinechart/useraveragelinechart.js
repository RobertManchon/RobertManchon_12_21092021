import React, { Component } from "react";
import './useraveragelinechart.css';
import ApiProvider from '../../../services/api/apiprovider'
import CustomTooltipSessionsAverage from "../customtooltip/customtooltipsessionsaverage/customtooltipsessionsaverage";
import {Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";
import Loader from '../../loader/loader';


class UserAverageLineChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
            .getUserAverageSessionData()
            .then((response) => {
                this.setState({
                    loading: false,
                    userAverageData: response.content,
                });
            });
    }

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
                    {this.getLineChart()}
                </article>
            )
    }

    // HEADER CHART
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

    // CHART
    getLineChart = () => {
        return (
            <div className="lineChart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={200}
                        data={this.state.userAverageData}
                        syncId="anyId"
                        outerRadius="75%"
                        margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                    >
                        <XAxis
                            dataKey="day"
                            stroke="rgba(255, 255, 255, 0.6)"
                            axisLine={false}
                            dy={10}
                            tickLine={false}
                            tick={{
                                fill : 'white',
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />
                        <YAxis
                            dataKey="sessionLength"
                            domain={[0, "dataMax + 60"]}
                            hide={true}
                        />
                        <Tooltip
                            content={<CustomTooltipSessionsAverage />}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                strokeWidth: 32,
                            }}
                        />
                        <Line
                            dataKey="sessionLength"
                            type="monotone"
                            stroke="rgba(255, 255, 255, 0.6)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                stroke: "rgba(255,255,255, 0.6)",
                                strokeWidth: 10,
                                r: 5,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default UserAverageLineChart