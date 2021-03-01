import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,SectionList,Image ,TouchableHighlight,StatusBar} from 'react-native';
import Constants from "expo-constants";
import pxToDp from '../../pxToDp'
import {navigation} from 'react-navigation'

export default function App(props) {
  function test(){
    props.navigation.navigate('Am')
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} hidden={false}></StatusBar>

      <SafeAreaView >

        {/* 头部信息 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>操作工：魏展展1</Text>
          <Text style={styles.headerSub}>常州易管智能有限公司</Text>
          <Image style={styles.headerTake} source={require("../../assets/images/tak.png")}></Image>
        </View>
        {/* 菜单 */}
        <View style={styles.menuRow}>
          <Text style={styles.menuTitle}>TPM</Text>
          <View style={styles.menuBox}>
            <TouchableHighlight onPress = { test } activeOpacity={100}>
              <View style={styles.menuItem}>
                <View style={styles.menuItemBox}>
                  <Image style={styles.menuImage} source={require("../../assets/images/am.png")}></Image>
                  <Text style={styles.menuSub}>自主保全</Text>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.menuItem}>
              <View style={styles.menuItemBox}>
                <Image style={styles.menuImage} source={require("../../assets/images/achievements.png")}></Image>
                <Text style={styles.menuSub}>交接班</Text>
              </View>
            </View> 
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: pxToDp(17)
  },
  header:{
    padding:pxToDp(7),
    paddingTop:pxToDp(28),
    position:'relative',
  },
  headerTitle:{
    fontSize:27,
    fontWeight:'bold',
    marginBottom:pxToDp(5)
  },
  headerSub:{
    fontSize:15,
    color:'#a4a5ad',
    fontWeight:'400',
    marginBottom:pxToDp(50)
  },
  headerTake:{
    width:pxToDp(81),
    height:pxToDp(81),
    position:'absolute',
    right:0,
    top:pxToDp(10),
  },

  menuRow:{

  },
  menuTitle:{
    paddingLeft:pxToDp(7),
    fontSize:18,
    fontWeight:'bold',
    color: '#1A051D',
    marginBottom:pxToDp(15)
  },
  menuBox:{
    flexDirection:'row',
    flexWrap:'wrap',
    display:'flex',
    
  },
  menuImage:{width:pxToDp(36),height:pxToDp(36)},
  menuSub:{marginTop:pxToDp(23),fontSize:15},
  menuItem:{
    width: pxToDp(100),
    height:pxToDp(100),
    borderColor:'#d3d2d9',
    borderWidth:pxToDp(1),
    borderRadius:8,
    padding:pxToDp(10),
    margin:pxToDp(6)
  },
  menuItemBox:{
    
  }
});
