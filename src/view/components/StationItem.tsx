import React from "react"
import { useNavigation } from "@react-navigation/native"

import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"

interface Props {
  id: string
  code: string
}
export const StationItem: React.FC<Props> = ({ id, code }) => {
  const navigation = useNavigation()

  const goToDetails = React.useCallback(() => {
    navigation.navigate("DetailsScreen")
  }, [navigation])

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/image.png")}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.textId}>{id}</Text>
        <Text style={styles.textLocation}>{code}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
    height: 105,
    borderBottomWidth: 1,
    borderColor: "#F0F4F5",
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 35,
    height: 40,
    marginRight: 27,
  },
  info: {
    justifyContent: "center",
  },
  textId: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  textLocation: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#ADB7C6",
  },
})
