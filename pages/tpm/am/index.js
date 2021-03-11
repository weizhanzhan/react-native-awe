import React, { Component } from 'react'
import { StyleSheet, View,StatusBar ,Text,SafeAreaView,TouchableHighlight,Button} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class AmPage extends React.Component{
  // 定义页面的导航属性
  static navigationOptions = {
    title:'自主保全',
    headerBackTitle:'返回'
  }
  render(){
 
    return (
      // <SafeAreaView style={styles.container}>
      //   <StatusBar barStyle={'dark-content'}></StatusBar>
      //   <Text>Am</Text>
      //     <Button title="famji" onPress={()=>{this.props.navigation.pop()}}>
      //     </Button>
      // </SafeAreaView>
      <View>
        <Text>213</Text>
        <Icon
          name="home"
          size={50}
          onPress={this.loginWithFacebook}
        >
        </Icon>
        <Button title="famji" onPress={()=>{this.props.navigation.pop()}}>
         </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    color:'#000000'
  }
})