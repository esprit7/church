import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, TouchableOpacity } from 'react-native';
class HomeNavigation extends Component {
  render() {
    return <View style={styles.container}>
      {this.props.items.map(v=><TouchableOpacity style={styles.item}
      ><Text>{v}</Text></TouchableOpacity>)}
    </View>
  }
}
const styles= {
container:{
backgroundColor:'white',
flex:1,
flexDirection:'row',
justifyContent:'space-evenly',
alignItems:'center'
},
item:{
    backgroundColor:'rgb(220,220,220)',
    padding:10,
    borderRadius:16
}

}
export default HomeNavigation;