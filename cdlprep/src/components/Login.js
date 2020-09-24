import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <main className="main">
          <div className="landing">
            {this.props.user ? (
              <div>
                <p>Welcome to CDL Prep!</p>
                <p>
                  Hello, {this.props.user.displayName || this.props.user.email}
                </p>
              </div>
            ) : (
              <div>
                <p>Welcome to CDL Prep!</p>
                <p>Please sign in.</p>
              </div>
            )}
            {this.props.user ? (
              <div>
                {' '}
                <button onClick={this.props.signOut}>Sign out</button>
                <br />
                <button>Continue to Class</button>
              </div>
            ) : (
              <div className="landing-form">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                ></input>
                <br />
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
                  <br />
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
          </div>
        </main>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
