import React from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { render } from '@testing-library/react';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.user ? (
            <p>Hello, {this.props.user.displayName || this.props.user.email}</p>
          ) : (
            <p>Please sign in.</p>
          )}
          {this.props.user ? (
            <button onClick={this.props.signOut}>Sign out</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              ></input>
              <div>
                {' '}
                <button
                  onClick={() =>
                    this.props.signInWithEmailAndPassword(
                      this.state.email,
                      this.state.password
                    )
                  }
                >
                  Sign in
                </button>
                <button
                  onClick={() =>
                    this.props.createUserWithEmailAndPassword(
                      this.state.email,
                      this.state.password
                    )
                  }
                >
                  Sign up
                </button>
              </div>

              <button onClick={this.props.signInWithGoogle}>
                Sign in with Google
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
