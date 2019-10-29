import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { logoutUser } from "../actions";
import ProfileCard from './ProfileCard'

const styles = () => ({
    root: {
      flexGrow: 1,
      marginBottom: '5%',
    },
    menuButton: {
      marginRight: "0.5%",
    },
    title: {
      flexGrow: 1,
    },
  });

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { classes } = this.props;
    const { isLoggingOut, logoutError, user } = this.props; 
    const userInfo = {name: user.displayName, email: user.email, photo: user.photoURL}
    return (
        <div>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        All Social
                    </Typography>
                    <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
        <ProfileCard userInfo={userInfo}/>
        {console.log(user)}
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
export default connect(mapStateToProps)((withStyles(styles)(Home)));
