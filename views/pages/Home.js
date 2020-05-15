import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, FlatList } from 'react-native';
import HomeNavigation from '../components/HomeNavigation'
import Header from '../components/Header'
import HomeItem from '../components/HomeItem'
import Events from '../pages/Events'


const elementsAccueil = [{
  title:"Concert Ouro Chede",
  description:"concert des enfants de coeur de Ouro Chede",
  date:"le 24 mars"
},
{
  title:"Concert Ouro Chede",
  description:"concert des enfants de coeur de Ouro Chede",
  date:"le 24 mars"
},
{
  title:"Concert Ouro Chede",
  description:"concert des enfants de coeur de Ouro Chede",
  date:"le 24 mars"
},
{
  title:"Concert Ouro Chede",
  description:"concert des enfants de coeur de Ouro Chede",
  date:"le 24 mars"
},
{
  title:"Concert Ouro Chede",
  description:"concert des enfants de coeur de Ouro Chede",
  date:"le 24 mars"
}]
class Home extends Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Church Restauration"/>
      </View>
      <View style={styles.navigation}>
        <HomeNavigation items={["Accueil","Evenements","Adorations"]}/>
      </View>
      <View style={styles.content}>
        <FlatList data={elementsAccueil} renderItem={({item})=><HomeItem item={item}/>}/>
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
export default Home;