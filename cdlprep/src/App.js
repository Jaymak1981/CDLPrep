import React from 'react';
import './App.css';
import Login from './components/Login.js';
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
        <main className="main">
          <Login />
        </main>
      </div>
    );
  }
}

export default App;
