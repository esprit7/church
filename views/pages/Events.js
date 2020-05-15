import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList } from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
const elementsEvents = [{
  title:"Dieu sur Terre",
  description:"concert des enfants de coeur de Ouro Chede",
  url:'./assets/doc/pdf1.pdf',
  date:"le 24 mars"
},
{
title:"Dieu sur Terre",
  description:"concert des enfants de coeur de Ouro Chede",
  url:'./assets/doc/pdf1.pdf',
  date:"le 24 mars"
},

{
  title:"Dieu sur Terre",
  description:"concert des enfants de coeur de Ouro Chede",
  url:'./assets/doc/pdf1.pdf',
  date:"le 24 mars"
},
{
title:"Dieu sur Terre",
  description:"concert des enfants de coeur de Ouro Chede",
  url:'./assets/doc/pdf1.pdf',
  date:"le 24 mars"
}
,
{
title:"Dieu sur Terre",
  description:"concert des enfants de coeur de Ouro Chede",
  url:'./assets/doc/pdf1.pdf',
  date:"le 24 mars"
}
]
class Events extends Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation items={["Accueil","Enseignement","Adorations"]}/>
      </View>
      <View style={styles.content}>
        <FlatList data={elementsEvents} renderItem={({item})=><HomeItem item={item}/>}/>
      </View>
    </View>
  }
}
const styles= {
container:{
backgroundColor:'white',
flex:1
},
header:{
  backgroundColor:'black',
  flex:1
},
navigation:{
  backgroundColor:'yellow',
  flex:1
},
content:{
  padding:15,
  flex:4
}

}
export default Events;