import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, SafeAreaView, Button, TextInput, Alert, FlatList, Text } from 'react-native';

var members = require('./assets/constants');

function randomHex() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this._onBackgroundColorChange = this._onBackgroundColorChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
    this._onTextSubmit = this._onTextSubmit.bind(this);

    this.state = {
        backgroundColor: '#ACDAF4', 
        secretPhrase: ''
    };
  }

  _onBackgroundColorChange() {
    this.setState({backgroundColor: randomHex()});
  }

  _onTextChange(text) {
    this.setState({secretPhrase: text});
  }

  _onTextSubmit(text) {
    if (this.state.secretPhrase == 'Thomas' || this.state.secretPhrase == 'thomas') {
      Alert.alert("Success", "You entered the right phrase!");
    } else {
      Alert.alert("Invalid", "You entered the wrong phrase!");
    }
  }
  
  _renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Image style={styles.listAvatar} source={{uri: item.image}} />
      <Text style={styles.listName}>{item.name}</Text>
      <Text style={styles.listUsername}>@{item.github_username}</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor: '#4D85DC'}}>
          <View>
            <Image style={styles.fullImage} source={require('./images/dog.jpg')} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainer}>
            <Image style={styles.halfImage} source={require('./images/cat.jpg')} />
            </View>
            <View style={styles.imageContainer}>
            <Image style={styles.halfImage} source={require('./images/bunny.jpg')} />
            </View>
          </View>

          <View style={[styles.backgroundColorView, {backgroundColor: this.state.backgroundColor}]}>
            <Button
              onPress={this._onBackgroundColorChange}
              title="Change background color" />
          </View>

          <View style={styles.inputView}>
            <TextInput 
              placeholder="Enter secret phrase"
              placeholderTextColor="white"
              style={styles.input}
              onChangeText={this._onTextChange}
              value={this.state.secretPhrase}
              onSubmitEditing={this._onTextSubmit}/>
          </View>

          <View style={styles.list}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={members}
              renderItem={this._renderItem} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#193441',
    padding: 20, 
    height: Dimensions.get('window').width / 2
  }, 
  fullImage: {
    flex: 1, 
    resizeMode: 'cover', 
    width: null, 
    height: Dimensions.get('window').width / 2
  }, 
  halfImage: {
    flex: 1, 
    resizeMode: 'cover', 
    width: null,
    height: null
  }, 
  backgroundColorView: {
    flex: 1, 
    height: Dimensions.get('window').width, 
    justifyContent: 'center'
  }, 
  inputView: {
    flex: 1, 
    height: 240, 
    backgroundColor: '#4D85DC', 
    justifyContent: 'center', 
    paddingLeft: 40, 
    paddingRight: 40
  }, 
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: 'white', 
    borderRadius: 10, 
    paddingLeft: 15,
    paddingRight: 15
  }, 
  list: {
    flex: 1, 
    height: 750
  }, 
  listItem: {
    padding: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50, 
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'white'
  }, 
  listAvatar: {
    width: 40, 
    height: 40, 
    borderRadius: 20
  }, 
  listName: {
    paddingLeft: 10, 
    flex: 1, 
    color: '#5B6D85', 
    fontWeight: 'bold'
  }, 
  listUsername: {
    color: 'gray'
  }
});
