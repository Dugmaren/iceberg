import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <div className="center">
        <br />
        <br />
        <br />
        <form
          id="local_login"
          name="local_login"
          method="post"
          action="/auth/local/signin"
        >
          <label htmlFor="email">Email Address</label>
          <input className="black-text" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <input className="black-text" name="password" type="password" />
          <button type="submit" className="teal btn-flat white-text">
            Sign In
          </button>
        </form>

        <br />

        <a href="/auth/google">Login with Google</a><br />

        <a href="/auth/signup">Sign Up</a>

      </div>
    );
  }
}

export default Login;
