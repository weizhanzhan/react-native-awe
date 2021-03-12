import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from '../home/index'
import MinePage from '../mine/index'
import NotifyPage from '../notify/index'
import Icon from 'react-native-vector-icons/AntDesign';

const BottomNavigator = createBottomTabNavigator({
  Home:{
    screen:HomePage,
    navigationOptions:{ 
      title:'首页',
      tabBarLabel:'首页',
      tabBarIcon:({tintColor,focused})=>(
        <Icon name="home" size={24} style={{color:tintColor}}></Icon>
      )
    }
  },
  Notify:{
    screen:NotifyPage,
    navigationOptions:{ 
      title:'通知',
      tabBarLabel:'通知',
      tabBarIcon:({tintColor,focused})=>(
        <Icon name="carryout" size={24} style={{color:tintColor}}></Icon>
      )
    }
  },
  Mine:{
    screen:MinePage,
    navigationOptions:{ 
      title:'我的',
      tabBarLabel:'我的',
      tabBarIcon:({tintColor,focused})=>(
        <Icon name="user" size={24} style={{color:tintColor}}></Icon>
      )
    }
  }
},{
  tabBarOptions: {
    labelStyle:{
      fontSize:14
    }
  }
})

export default BottomNavigator