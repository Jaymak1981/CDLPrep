import React, { Component, Fragment } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome.js';
import Tests from './Tests.js';
import FindSchools from './FindSchools.js';
import { MDBBtn } from 'mdbreact';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

function navSignOut() {
  firebase
    .auth()
    .signOut()
    .then((window.location.href = 'http://localhost:3000/'));
}
class School extends Component {
  render() {
    return (
      <div className="school-container">
        <div className="school">
          {' '}
          <nav className="navbar navbar-expand-lg navbar-dark brown">
            {' '}
            <a href="/school" className="navbar-brand cdlprep">
              CDL Prep
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/school" className="nav-link" id="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a id="nav-link" className="nav-link" href="/school/tests">
                    Tests
                  </a>
                </li>
                <li>
                  <a
                    id="nav-link"
                    className="nav-link"
                    href="/school/findschools"
                  >
                    Schools
                  </a>
                </li>
                <li>
                  <a
                    id="nav-link"
                    href={navSignOut}
                    onClick={navSignOut}
                    className="nav-link"
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <Switch>
              <Route path={'/school'} exact component={Welcome} />
              <Route path={'/school/tests'} exact component={Tests} />
              <Route
                path={'/school/findschools'}
                exact
                component={FindSchools}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default School;
