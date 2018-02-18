/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const words = Platform.select({
  ios: 'No need to run Xcode and emulator at the same time... Finally!',
  android: 'No need to run Android Studio and emulator at the same time... Finally!',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello React Native!
        </Text>
        <Text style={styles.words}>
          {words}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  words: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
