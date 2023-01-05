import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native"

export const DisclaimerScreen: React.FC = ({ route }) => {
  const { token } = route.params
  const navigation = useNavigation()

  const goToStation = React.useCallback(() => {
    AsyncStorage.setItem("accepted", "true")
    AsyncStorage.setItem("token", token)
    navigation.navigate("Home")
  }, [navigation])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require("../assets/images/bg.png")}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.mainText}>Disclaimer</Text>
          <Text style={styles.description}>
            The information provided by the Zdaly Fuel Network Optimizer app is
            based on historical data. Data on Zdaly Light is updated once daily
            at 8:00 a.m. eastern time. Any prospective information is based on
            that data and should not be relied on as a estimation of future
            performance. Any future product prices are the manufacturer's
            suggested retail price (MSRP) only. Sites are independent operators
            free to set their retail price.
          </Text>
          <TouchableOpacity onPress={goToStation} style={styles.button}>
            <Text style={styles.btnText}>I Accept</Text>
          </TouchableOpacity>
        </View>
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
  },
  logo: {
    width: 90,
    height: 90,
  },
  contentWrapper: {
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    marginTop: -25,
  },
  content: {
    alignItems: "center",
  },
  mainText: {
    fontSize: 21,
    fontFamily: "Poppins-Bold",
    lineHeight: 31,
    marginTop: 33,
    marginBottom: 13,
  },
  description: {
    paddingHorizontal: 34,
    fontFamily: "Poppins-Light",
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#DD1D21",
    borderRadius: 50,
    width: 239,
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 34,
  },
  btnText: {
    color: "#FFFFFF",
    marginRight: 8,
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
})
