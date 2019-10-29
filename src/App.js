import React, { Component } from 'react'
import firebase from 'firebase'
import Social from './components/Social'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Social />
      </div>
     
    )
  }
}

export default App
