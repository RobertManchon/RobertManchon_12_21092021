import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashBoard from '../dashboard/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashBoard/>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
