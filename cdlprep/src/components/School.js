import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome.js';
import Tests from './Tests.js';

class School extends Component {
  render() {
    return (
      <div className="school">
        <nav>
          <div className="nav-link">
            <a href="/">Home</a>
          </div>
          <div className="nav-link">
            <a href="/school/tests">Tests</a>
          </div>
          <div className="nav-link">
            <a href="/school/findschools">Find Schools</a>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path={'/school'} exact component={Welcome} />
            <Route path={'/school/tests'} exact component={Tests} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default School;
