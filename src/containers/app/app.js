import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DashBoard from '../dashboard/dashboard'
import Error404 from '../../components/error404/error404'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DashBoard />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </Router>
    );
}

export default App