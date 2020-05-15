import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, TouchableOpacity,StatusBar } from 'react-native'

class Header extends Component {
  render() {
    return <View style={styles.container}>
    <Text style={styles.text}>{this.props.title}</Text>
    </View>
  }
}
const styles= {
container:{
flex:1,
padding:10,
paddingTop: StatusBar.currentHeight + 10,
backgroundColor: 'rgb(0,200,0)'
},
text:{
    fontSize:28,
    fontWeight:'bold',
    color:'white'
}

}
export default Header;