import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCard from "../components/ImageCard";


class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          ...styles.container,
          flexDirection: xs() ? "column" : "row"
        }}
      >
        <ImageCard
          data={this.props.data[0]}
          marginLeft={xs() ? 25 : 25}
          marginRight={xs() ? 25 : 12.5}
          openExternalLink={true}
          height={xs() ? 380 : null}
        />

        <ImageCard
          data={this.props.data[1]}
          marginLeft={xs() ? 25 : 12.5}
          marginRight={xs() ? 25 : 25}
          openExternalLink={true}
          height={xs() ? 380 : null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
    backgroundColor: globalStyles.backgroundColor
  }
});

export default BookCard;
