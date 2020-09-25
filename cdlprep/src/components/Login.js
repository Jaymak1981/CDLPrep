import React, { Fragment } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { MDBBtn, MDBInput } from 'mdbreact';

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
    console.log(this.props.signOut);
    return (
      <div>
        <div className="landing">
          {this.props.user ? (
            <div className="welcome">
              <p>
                Welcome to <span className="cdlprep">CDL Prep</span>
              </p>
              <p>
                Hello, {this.props.user.displayName || this.props.user.email}
              </p>
            </div>
          ) : (
            <div className="welcome">
              <p>
                Welcome to <span className="cdlprep">CDL Prep</span>
              </p>
              <p>Please sign in.</p>
            </div>
          )}
          {this.props.user ? (
            <div>
              {' '}
              <Fragment>
                <MDBBtn color="brown" onClick={this.props.signOut}>
                  Sign out
                </MDBBtn>
              </Fragment>
              <br />
              <a href="/school">
                <Fragment>
                  <MDBBtn>Continue to Classes</MDBBtn>
                </Fragment>
              </a>
            </div>
          ) : (
            <div className="landing-form form-group">
              <Fragment>
                {' '}
                <MDBInput
                  type="text"
                  label="Email"
                  id="input"
                  size="lg"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                />
                <MDBInput
                  type="text"
                  label="Password"
                  id="input"
                  size="lg"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Fragment>

              <div>
                {' '}
                <Fragment>
                  <MDBBtn
                    color="brown"
                    onClick={() =>
                      this.props.signInWithEmailAndPassword(
                        this.state.email,
                        this.state.password
                      )
                    }
                  >
                    Sign in
                  </MDBBtn>
                  <MDBBtn
                    color="brown"
                    onClick={() =>
                      this.props.createUserWithEmailAndPassword(
                        this.state.email,
                        this.state.password
                      )
                    }
                  >
                    Sign up
                  </MDBBtn>{' '}
                  <br />
                  <MDBBtn onClick={this.props.signInWithGoogle}>
                    Sign in with Google
                  </MDBBtn>
                </Fragment>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
