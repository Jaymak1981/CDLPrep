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
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';

function navSignOut() {
  firebase
    .auth()
    .signOut()
    .then((window.location.href = 'http://localhost:3000/'));
}
class School extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="school-container">
        <div className="school">
          {' '}
          <MDBNavbar color="brown" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text cdlprep">CDL Prep</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/school">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/school/tests">Tests</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/school/findschools">Find Schools</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={navSignOut}>
                    Sign Out
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right></MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
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
