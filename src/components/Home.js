import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";


class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError, user } = this.props;    
    return (
      <div>
        <h1>Welcome {user.displayName}</h1>
        {console.log({user})}
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    user: state.auth.user
  };
}
export default connect(mapStateToProps)(Home);
