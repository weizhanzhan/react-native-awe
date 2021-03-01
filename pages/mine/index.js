import React, { PureComponent } from 'react'
import { StyleSheet, View,StatusBar ,Text,SafeAreaView} from 'react-native'
export default MinePage = ()=>{
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <Text>mine</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    color:'#000000'
  }
})