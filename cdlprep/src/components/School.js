import React, { Component, Fragment } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome.js';
import Tests from './Tests.js';
import FindSchools from './FindSchools.js';
import { MDBBtn } from 'mdbreact';

class School extends Component {
  render() {
    return (
      <div>
        <div className="school">
          {' '}
          <nav id="navigation">
            {' '}
            <div>
              <p className="nav-link nav-header cdlprep cdlprep-div">
                CDL Prep
              </p>
            </div>
            <div className="nav-link">
              <Fragment>
                <a href="/school">
                  <MDBBtn gradient="blue">Home</MDBBtn>
                </a>
              </Fragment>
            </div>
            <div className="nav-line"></div>
            <div className="nav-link">
              <Fragment>
                <a href="/school/tests">
                  <MDBBtn gradient="blue">Tests</MDBBtn>
                </a>
              </Fragment>
            </div>
            <div className="nav-line"></div>
            <div className="nav-link">
              <Fragment>
                <a href="/school/findschools">
                  <MDBBtn gradient="blue">Find Schools</MDBBtn>
                </a>
              </Fragment>
            </div>
            <div className="nav-line"></div>
            <div className="nav-link nav-sign-out">
              <Fragment>
                <a href="/">
                  <MDBBtn gradient="blue">Sign Out</MDBBtn>
                </a>
              </Fragment>
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
