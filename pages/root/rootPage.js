import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from '../home/index'
import MinePage from '../mine/index'
import NotifyPage from '../notify/index'

const BottomNavigator = createBottomTabNavigator({
  Home:{
    screen:HomePage,
    navigationOptions:{ title:'首页',tabBarLabel:'首页'}
  },
  Notify:{
    screen:NotifyPage,
    navigationOptions:{ title:'通知',tabBarLabel:'通知'}
  },
  Mine:{
    screen:MinePage,
    navigationOptions:{ title:'我的',tabBarLabel:'我的'}
  }
})

export default BottomNavigator