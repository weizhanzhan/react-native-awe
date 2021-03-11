import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BottomNavigator from './pages/root/rootPage'
import AmPage from './pages/tpm/am/index'
import LoginPage from './pages/login/index'
const AppStack =  createStackNavigator(
  {
    Login:{ 
      screen:LoginPage, 
      navigationOptions:{
        headerShown:false
      }
  },
    BottomNavigator:{
      screen:BottomNavigator,
      navigationOptions:{
        headerShown:false
      }
    },
    Am:{  screen:AmPage  },

  },
  {
    // mode:'modal',headerMode:'none'
  }
)

export default createAppContainer(AppStack)