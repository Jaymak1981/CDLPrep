import React from 'react';
import './App.css';
import Login from './components/Login.js';
import School from './components/School.js';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <div>
        <div>
          <Switch>
            <Route path={'/'} exact component={Login} />

            <Route path={'/school'} component={School} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
