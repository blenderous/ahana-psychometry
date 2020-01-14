import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Home from './components/home.component';
import Assessments from './components/assessments.component';
import Assessment_01 from './components/assessments/assessment_01.component';
import Assessment_02 from './components/assessments/assessment_02.component';
import Assessment_03 from './components/assessments/assessment_03.component';

function App() {
  return (
    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to={'/'} className="navbar-brand">Ahana Psychometry</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route exact path='/' component={ Home } />
              <Route exact path='/assessments' component={ Assessments } />
              <Route path='/assessments/01' component={ Assessment_01 } />
              <Route path='/assessments/02' component={ Assessment_02 } />
              <Route path='/assessments/03' component={ Assessment_03 } />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
