import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, TouchableOpacity } from 'react-native';
class HomeItem extends Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text>{this.props.item.description}</Text>
        <Text style={styles.date}>{this.props.item.date}</Text>
    </View>
  }
}
const styles= StyleSheet.create({
container:{
    flex:1,
    padding:10,
    borderRadius:16,
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'rgb(220,220,220)',
    marginBottom:10
},
title:{
    fontWeight:'bold',
    marginBottom:7
},
date:{
    fontWeight:'bold',
    fontStyle:'italic',
    textAlign:'left'
}

})
export default HomeItem;