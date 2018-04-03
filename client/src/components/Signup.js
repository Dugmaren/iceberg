import React, {Component} from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="center">
        <br />
        <br />
        <br />
        <form
          id="signup"
          name="signup"
          method="post"
          action="/auth/local/signup"
        >
          <label htmlFor="userName">User Name</label>
          <input className="black-text" name="userName" type="text" />
          <label htmlFor="email">Email Address</label>
          <input className="black-text" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <input className="black-text" name="password" type="password" />
          <button type="submit" className="teal btn-flat white-text">
            SIGN UP
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
