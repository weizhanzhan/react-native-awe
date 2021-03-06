import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BottomNavigator from './pages/root/rootPage'
// import TPMNavtgaions from './pages/tpm/nativations'
import AmPage from './pages/tpm/am/index'
const AppStack =  createStackNavigator(
  {
    BottomNavigator:{
      screen:BottomNavigator,
      navigationOptions:{
        headerShown:false
      }
    },
    Am:{
      screen:AmPage
    }
    // ...TPMNavtgaions
  },
  {
    // mode:'modal',headerMode:'none'
  }
)

export default createAppContainer(AppStack)