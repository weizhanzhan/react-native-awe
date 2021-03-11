import React, { Component } from 'react'
import { StyleSheet, View,Image ,Text,SafeAreaView,TouchableHighlight} from 'react-native'
import { Button,ThemeProvider } from 'react-native-elements'
import pxToDp from '../../pxToDp'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import request from '../../utils/request'
export default class LoginPage extends React.Component{

  state = {
    userName:'',
    userInput:React.createRef(),
    userNameErrorMsg:'',
    password:'',
    passwordInput:React.createRef(),
    passwordErrorMsg:''
  }

  render(){
    const theme = {
      Button: {
        buttonStyle:{
          backgroundColor:'#3f60ee',
          height:pxToDp(48),
          borderRadius:pxToDp(6)
        }
      },
      Input:{
        inputContainerStyle:{
          borderColor:'#e8e7ea',
          borderBottomWidth:pxToDp(1)
        },
        leftIconContainerStyle:{
          paddingRight:pxToDp(16)
        }
      }
    };
    return (
      <ThemeProvider theme={theme}>
         <View style={styles.container}>
          <Image style={styles.headerImage} source={require("../../assets/images/login-header.png")}></Image>
          <View style={styles.InputContainer}>
            <Input
              ref={this.state.userInput}
              value={this.state.userName}
              onChangeText={(value)=>this.setState({ userName: value })}
              placeholder='请输入用户名'
              errorMessage={this.state.userNameErrorMsg}
              renderErrorMessage={true}
              leftIcon={{ type: 'font-awesome', name: 'user',color:'#3f60ee'  }}
            />
            <Input
              ref={ this.state.passwordInput}
              onChangeText={(value)=>this.setState({ password: value })}
              value={this.state.password}
              errorMessage={this.state.passwordErrorMsg}
              placeholder='请输入密码'
              leftIcon={{ type: 'font-awesome', name: 'lock',color:'#3f60ee' }}
            />
          </View>
          <Button title="登 录" style={styles.submitBtn} onPress={this.submit.bind(this)}></Button>
        </View>    
      </ThemeProvider>
     
    )
  }

  submit(){
    const { userName,password} = this.state
    if(userName==""){
      this.setState({ userNameErrorMsg:'请输入用户名' })
      this.state.userInput.current.shake();
      return
    }else{
       this.setState({ userNameErrorMsg:'' })
    }
    if(password==""){
      this.setState({ passwordErrorMsg:'请输入密码' })
      this.state.passwordInput.current.shake();
      return
    }else{
       this.setState({
        passwordErrorMsg:''
      })
    }

    request({
      method:'pot',
      url:'/sys/login',
      params:{
        username: 2,
        password: 2,
        drivceImei: 865231041923595
      }
    }).then((result) => {
      console.log(1)
    }).catch((err) => {
      console.log(2,err)
    });

   
  }
}
const styles = StyleSheet.create({
  container:{
    color:'#000000'
  },
  InputContainer:{
    paddingLeft:pxToDp(24),
    marginTop:pxToDp(20)
  },
  headerImage:{
    width:'100%',
    height:pxToDp(228)
  },
  submitBtn:{
    margin:pxToDp(24),
    marginTop:pxToDp(65),
  }
})