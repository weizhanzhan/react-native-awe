import React, { PureComponent } from 'react'
import { StyleSheet, View,StatusBar ,Text,SafeAreaView,TouchableHighlight,Button} from 'react-native'
export default AmPage = (props)=>{
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <Text>Am</Text>
        <Button title="famji" onPress={()=>{props.navigation.pop()}}>
        </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    color:'#000000'
  }
})