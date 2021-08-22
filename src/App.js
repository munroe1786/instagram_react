import { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={} />
      </Switch>
    </Router>
  )
}

export default App;
