import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
  renderUserName() {
    switch(this.props.auth)
    {
      case null: return "NOT FOUND";
      default:
        return this.props.auth.name;
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        OMG You're logged in as {this.renderUserName()}!!
        <br />
        <br />
        <br />
        <ol>
          <li>PS - vertical alignment please!</li>
          <li>Need to link Google ID to regular login /w password</li>
        </ol>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Dashboard);
