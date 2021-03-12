import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigator from '../pages/root/rootPage'
import AmPage from '../pages/tpm/am/index'
import LoginPage from '../pages/login/index'
import WelcomePage from '../pages/WelcomePage'

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
        headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
  },
});
const MainNavigator =  createStackNavigator(
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
    Am:{  
      screen:AmPage  
    },
  },
)

export default createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  
  Main: MainNavigator,
}, {
  navigationOptions: {
      headerShown: false,
  },
}));
