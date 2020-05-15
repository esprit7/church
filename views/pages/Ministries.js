import React from "react";
import { View, StyleSheet, FlatList, ScrollView, StatusBar } from "react-native";
import ImageCard from "./views/components/ImageCard";


export default class MinistryScreen extends React.Component {
  state = {
    ministries: [
      {
        key: "1",
        description: "",
        title: "Maison de prière",
        mediaURI: require("./assets/ministries/priere.jpg"),
        address: "14 Rue Chaillon 92390 Villeneuve-la-Garenne",
        url: ""
      },
      {
        key: "2",
        description: "",
        title: "Louange",
        mediaURI: require("./assets/ministries/louange.jpg"),
        address: "",
        url: ""
      },
      {
        key: "3",
        description: "",
        title: "Ministère aux enfants",
        mediaURI: require("./assets/ministries/enfants.jpg"),
        address: "",
        url: ""
      },
      {
        key: "4",
        description: "",
        title: "Humanitaire, FESIDEV",
        mediaURI: require("./assets/ministries/fesidev.jpg"),
        address: "",
        url: "https://fesidev.org"
      },
      {
        key: "5",
        description: "",
        title: "Livres, CPH",
        mediaURI: require("./assets/ministries/cph.jpg"),
        address: "",
        url: "https://ztfbooks.com/en/"
      },
      {
        key: "6",
        description: "",
        title: "Jeunesse Et Vie",
        mediaURI: require("./assets/ministries/jev.jpg"),
        address: "",
        url: "https://www.jeunessetvie.fr"
      },
      {
        key: "7",
        description: "",
        title: "Communication",
        mediaURI: require("./assets/ministries/communication.jpg"),
        address: "",
        url: ""
      }
    ]
  };

 

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFFFFF"
          translucent
        />

        <ScrollView>
          <FlatList
            style={styles.ministriesList}
            data={this.state.ministries}
            scrollEnabled={false}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <ImageCard
                data={item}
                key={item.key}
                marginLeft={20}
                marginRight={20}
                openExternalLink={false}
                height={250}
                onPress={() => {
                  this._openMinistryDetails(item);
                }}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.backgroundColor,
    flex: 1
  },
  ministriesList: {
    width: "100%"
  }
});
