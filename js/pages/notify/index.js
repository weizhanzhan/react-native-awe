import React, { PureComponent } from 'react'
import { StyleSheet, View,StatusBar ,Text,SafeAreaView} from 'react-native'


export default class NotifyPage extends React.Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'}></StatusBar>
        <Text>notify</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    color:'#000000'
  }
})