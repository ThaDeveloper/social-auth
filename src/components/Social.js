import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebbaseAuth from 'react-firebaseui/StyledFirebaseAuth'



class Social extends Component {
  state = {
    isSignedIn: false,
  }
  
  uiConfig ={
    siginFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user //if user is object true else false
      })
      console.log(user)
    })
  }

  render() {
    return (
      <div className="Social">
        { this.state.isSignedIn ?
          (
            <span>
              <div>signed In</div>
              <button onClick={()=>firebase.auth().signOut()}>
                Sign Out!
              </button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile pic" src={firebase.auth().currentUser.photoURL}/>
            </span>
          ):(
            <StyledFirebbaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )
        }
      </div>
     
    )
  }
}

export default Social
