import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/js/home'; 
import ThanhToan from './views/js/ThanhToan';
import NotFound from './views/js/not-found';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/thanh-toan" component={ThanhToan} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;