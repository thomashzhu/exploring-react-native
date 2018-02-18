import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thomas is <Text style={styles.important}>AWESOME</Text>.</Text>
        <Text style={styles.subtitle}>Too awesome to describe in words...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  }, 
  important: {
    color: 'red',
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'gray'
  }
});
