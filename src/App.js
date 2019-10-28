/* global gapi */
import { gapi } from 'gapi-script';
import React, { Component } from 'react'

class App extends Component {
  state = {
    isSignedIn: false,
    error: null,
  }
 
  componentDidMount() {

    const successCallback = this.onSuccess.bind(this);
    
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: process.env.REACT_APP_CLIENT_ID,
      })

      this.auth2.then(() => {
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
    });    

    window.gapi.load('signin2', () => {
      // render signin button
      var opts = {
        width: 200,
        height: 50,
        client_id: process.env.REACT_APP_CLIENT_ID,
        onSuccess: successCallback
      }
      gapi.signin2.render('my-signin2', opts)
    })
  }

  onSuccess() {
    this.setState({
      isSignedIn: true,
      error: null,
    })
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }

  logout = () => {
    let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
    if (auth2) {
      auth2
        .signOut()
        .then(() => {
          this.setState({
            isSignedIn: false,
          })
          console.log('Logged out successfully');
        })
        .catch(err => {
          console.log('Error while logging out', err);
        });
    } else {
      console.log('Error while logging out');
    }
  };
  
  render() {
    return (
      <div className="App">
        <div id="my-signin2"></div>
        {this.state.isSignedIn && (
        <button style={{ width: 200, height: 40, textAlign: 'center' }} onClick={this.logout}>
          Logout
        </button>
      )}
      </div>
     
    )
  }
}

export default App
