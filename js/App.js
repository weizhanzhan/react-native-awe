import React from 'react';
import { View,Text } from 'react-native'
import AppNavigator from './navigator/AppNavigators'
import Toast, {DURATION} from 'react-native-easy-toast'

//将App组件中的this赋给全局的self
let self;
//所有子页面均可直接调用global.toast("")来吐司提示消息
global.toast = false


export default class App extends React.Component {

  componentDidMount() {
    //封装全局方法
    self = this;
    global.toast = function(message) {
        self.refs.toast.show(message);
    };
  }
  

  render(){
    return (
    <View style={{flex:1}}>
      <AppNavigator />
      <Toast ref="toast" opacity={0.8}/>
    </View>)
  }
}