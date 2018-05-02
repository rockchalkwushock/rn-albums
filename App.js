/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'

import { Header, List } from './src'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header text="Albums!" />
        <List />
      </View>
    )
  }
}
