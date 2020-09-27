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
    activeItemPills: '1',
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  togglePills = (tab) => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab,
      });
    }
  };

  render() {
    const { activeItemPills } = this.state;
    return (
      <div className="school-container">
        <div className="school">
          {' '}
          <MDBNavbar color="brown" dark expand="md" className="nav-pills">
            <MDBNavbarBrand>
              <strong className="white-text cdlprep">CDL Prep</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink
                    active={activeItemPills === '1'}
                    onClick={this.togglePills('1')}
                    exact
                    to="/school"
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    active={activeItemPills === '2'}
                    onClick={this.togglePills('2')}
                    to="/school/tests"
                  >
                    Tests
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    active={activeItemPills === '3'}
                    onClick={this.togglePills('3')}
                    to="/school/findschools"
                  >
                    Find Schools
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/school/signout" onClick={navSignOut}>
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
