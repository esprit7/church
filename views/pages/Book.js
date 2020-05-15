import React from "react";
import { View, StyleSheet, FlatList, ScrollView, StatusBar } from "react-native";
import BookCards from "../components/BookCards";
import ImageCard from "../components/ImageCard";


 class Books extends Component {
  state = {
    books: [
      [
        {
          
          title: "Le Chemin de la Vie",
          image: "./assets/images/books/elclivres.jpg",
          url:
            "https://elclivres.fr/accueil/8-le-chemin-de-la-vie-9782357740471.html"
        },
        {
          
          title: "L'Amour et le Pardon de Dieu",
          image: "./assets/images/books/elclivres.jpg",
          url:
            "https://elclivres.fr/accueil/20-l-amour-et-le-pardon-de-dieu-9782357740037.html"
        }
      ],
      [
        {
          
          title: "Centré sur Dieu",
          image: "./assets/images/books/elclivres.jpg",
          url: "https://elclivres.fr/accueil/32-centre-sur-dieu.html"
        },
        {
          
          title: "Connaitre le Dieu de bonté sans pareille",
          image: "./assets/images/books/elclivres.jpg",
          url:
            "https://elclivres.fr/accueil/25-connaitre-le-dieu-de-bonte-sans-pareille--9782357740112.html"
        }
      ],
      [
        {
          
          title: "Réveil spirituel personnel",
          image: "./assets/images/books/elclivres.jpg",
          url:
            "https://elclivres.fr/accueil/16-reveil-spirituel-personnel-9782357740686.html"
        },
        {
          
          title: "L'utilisation du temps",
          image: "./assets/images/books/elclivres.jpg",
          url:
            "https://elclivres.fr/accueil/14-l-utilisation-du-temps-9782357740259.html"
        }
      ]
    ],
    elcLivresPromo: {
      
      title: "Tous nos autres livres sur\nELC Livres",
      image: "./assets/images/books/elclivres.jpg",
      url: "https://elclivres.fr"
    }
  };

  static navigationOptions = AppHeader("Livres");

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
            style={styles.booksList}
            data={this.state.books.slice(0, 1)}
            scrollEnabled={false}
            keyExtractor={item => item[0].key + item[1].key}
            renderItem={({ item }) => (
              <BookCards data={item} key={item[0].key + item[1].key} />
            )}
          />

          <View style={styles.elcLivresPromo}>
            <ImageCard
              data={this.state.elcLivresPromo}
              marginLeft={25}
              marginRight={25}
              openExternalLink={true}
              width={"100%"}
              height={400}
            />
          </View>

          <FlatList
            style={styles.booksList}
            scrollEnabled={false}
            data={this.state.books.slice(1, 3)}
            keyExtractor={item => item[0].key + item[1].key}
            renderItem={({ item }) => (
              <BookCards data={item} key={item[0].key + item[1].key} />
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
  booksList: {
    width: "100%"
  },
  elcLivresPromo: {}
});
export default Books;