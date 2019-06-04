import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import CharacterDetail from './screens/CharacterDetail'
import Home from './screens/Home'

const App = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        },
      },
      Character_detail: {
        screen: CharacterDetail,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
)

export default App
