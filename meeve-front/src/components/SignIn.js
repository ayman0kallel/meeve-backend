
import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., send data to a server)
  };

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <Typography>hhhhhhhhh</Typography>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
