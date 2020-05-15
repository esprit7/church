import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";


class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick(item) {
    if (
      this.props.openExternalLink &&
      item &&
      item.hasOwnProperty("url") &&
      item.url
    ) {
      Linking.openURL(item.url);
    } else if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    return (
      <View
        style={{
          ...styles.card,
          flex: 1,
          height: this.props.height || 320,
          marginLeft: this.props.marginLeft,
          marginRight: this.props.marginRight
        }}
      >
        <TouchableOpacity
          style={styles.radius}
          activeOpacity={0.85}
          onPress={() => this._handleClick(this.props.data)}
        >
          <View style={styles.imageWrapper}>
            <Image style={styles.picture} source={this.props.data.mediaURI} />
          </View>

          <View style={styles.imageCardBody}>
            <PSText size={globalStyles.baseFontSize + 2}>
              {this.props.data.title}
            </PSText>

            {this.props.openExternalLink && (
              <RippleButton
                name={"external-link"}
                onPress={() => this._handleClick(this.props.data)}
                size={20}
                style={styles.openURLButton}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "visible",
    ...globalStyles.boxShadow
  },
  radius: {
    flex: 1
  },
  imageWrapper: {
    flex: 1
  },
  picture: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  imageCardBody: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 40
  },
  openURLButton: {
    position: "absolute",
    right: 0,
    bottom: 0
  }
});

export default ImageCard;
