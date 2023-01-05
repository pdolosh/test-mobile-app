import React from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  FlatList,
} from "react-native"
import { StationItem } from "../components/StationItem"
import Search from "~/view/assets/icons/search.svg"
import { useQuery } from "react-query"
import { QueryKey } from "~/constants/constants"
import { App } from "~/services/api/App"

export const StationScreen: React.FC = () => {
  const [value, setValue] = React.useState<string>("")

  const { data, isLoading } = useQuery(QueryKey.LIST_SATATION, App.list)

  const renderItem = ({ item }: any) => (
    <StationItem code={item.name} id={item.pantone_value} />
  )

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require("../assets/images/bg.png")}
      >
        <Text style={styles.header}>Select Station</Text>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <View style={styles.inputWrapper}>
          <Search color="#ADB7C6" />
          <TextInput
            value={value}
            placeholder="Search by ID, Name, City"
            placeholderTextColor="#ADB7C6"
            style={styles.textInput}
            onChangeText={(text) => setValue(text)}
          />
        </View>
        <FlatList
          data={data?.data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
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
  },
  content: {
    alignItems: "center",
    marginTop: 37,
  },
  textInput: {
    height: 60,
    flex: 1,
    padding: 10,
    width: "80%",
    fontFamily: "Poppins-Bold",
    fontWeight: "500",
    color: "#ADB7C6",
  },
  inputWrapper: {
    backgroundColor: "#F0F4F5",
    borderRadius: 11,
    marginTop: 37,
    height: 60,
    marginHorizontal: 34,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 21,
  },
  flatlist: {
    height: "100%",
    marginBottom: 200,
  },
})
