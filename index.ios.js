/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  LayoutAnimation,
  Animation,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'


var AwesomeProject = React.createClass({
  componentWillMount() {
    // Animate creation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  },

  getInitialState() {
    return { h: 300 }
  },

  _onPress() {
    // Animate the update
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ h: this.state.h + 300})
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={[styles.boxone, {height: this.state.h}]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.boxtwo, {height: this.state.h}]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.boxthree, {height: this.state.h}]} />
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  boxone: {
    backgroundColor: 'red',
  },
  boxtwo: {
    backgroundColor: 'blue',
  },
  boxthree: {
    backgroundColor: 'green',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
