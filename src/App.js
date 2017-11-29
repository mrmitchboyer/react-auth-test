import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCum0E1pN3s8ZPWHG4o2A0IgRkIMove3ik',
      authDomain: 'authe-18228.firebaseapp.com',
      databaseURL: 'https://authe-18228.firebaseio.com',
      projectId: 'authe-18228',
      storageBucket: 'authe-18228.appspot.com',
      messagingSenderId: '163336980509'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
      return (
        <View>
          <Spinner size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
