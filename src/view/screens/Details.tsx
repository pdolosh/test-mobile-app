import React from "react"
import { useNavigation } from "@react-navigation/native"
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native"
import { Card } from "../components/Card"
import Arrow from "~/view/assets/icons/backArrow.svg"

export const DetailsScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require("../assets/images/bg.png")}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Arrow
            onPress={() => navigation.goBack()}
            style={styles.arrow}
            color="#000000"
          />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Details</Text>
        </View>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <Text style={styles.description}>Station Subscribed</Text>
        <Card />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  imgbg: {
    width: "100%",
    height: 230,
    alignItems: "center",
    backgroundColor: "yellow",
    justifyContent: "center",
    marginTop: -25,
    flexDirection: "row",
  },
  header: {
    fontSize: 21,
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
  },
  contentWrapper: {
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    marginTop: -25,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  arrow: {
    paddingLeft: 34,
  },
  iconContainer: {
    width: "35%",
    marginLeft: 32,
  },
  headerContainer: {
    width: "55%",
    marginRight: 32,
  },
  description: {
    fontSize: 21,
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
    paddingLeft: 6,
    marginTop: 50,
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 15,
  },
})
