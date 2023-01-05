import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native"
import EmailIcon from "~/view/assets/icons/email.svg"
import PasswordIcon from "~/view/assets/icons/passwordIcon.svg"
import Arrow from "~/view/assets/icons/arrowRight.svg"
import { useMutation } from "react-query"
import { Auth } from "~/services/api/User"

export const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("eve.holt@reqres.in")
  const [password, setPassword] = useState<string>("cityslicka")
  const [secured, setSecured] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const navigation = useNavigation()

  useEffect(() => {
    setError("")
  }, [email, password])

  const goToForgotScreen = React.useCallback(() => {
    // navigation.navigate('ForgotPassword');
  }, [navigation])

  const loginMutation = useMutation(Auth.login, {
    onSuccess: (res: any) => {
      console.log(res, "response")
      if (res.status === 200 && res.data?.token) {
        AsyncStorage.setItem("token", res.data?.token)
        navigation.navigate("DisclaimerScreen", {
          token: res.data?.token,
        })
      }
    },
    onError: (error) => {
      console.warn(error?.response?.data?.error)
      setError(error && error?.response?.data?.error)
    },
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.textLogin}>Login</Text>
      <View style={styles.inputView}>
        <View style={styles.inputIcon}>
          <EmailIcon width={16} height={16} color="red" />
        </View>
        <TextInput
          value={email}
          style={styles.textInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.inputIcon}>
          <PasswordIcon
            onPress={() => setSecured(!secured)}
            width={24}
            height={24}
            color="red"
          />
        </View>
        <TextInput
          value={password}
          style={styles.textInput}
          secureTextEntry={secured}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <ImageBackground
        style={styles.imgbg}
        source={require("../assets/images/bg.png")}
      >
        <TouchableOpacity
          onPress={() => {
            loginMutation.mutate({
              email: email,
              password: password,
            })
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.btnText}>Login</Text>
          <Arrow color="white" />
        </TouchableOpacity>
        <Text onPress={goToForgotScreen} style={styles.forgotText}>
          Forgot Password?
        </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 90,
    height: 90,
  },
  textLogin: {
    marginVertical: 50,
    fontFamily: "Poppins-Bold",
    fontSize: 21,
    fontWeight: "700",
  },
  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F4F5",
  },
  textInput: {
    height: 45,
    flex: 1,
    padding: 10,
    width: "80%",
    fontFamily: "Poppins-SemiBold",
  },
  inputIcon: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
  },
  loginBtn: {
    backgroundColor: "#DD1D21",
    borderRadius: 50,
    width: 129,
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
  imgbg: {
    width: "100%",
    height: 350,
    alignItems: "center",
    backgroundColor: "yellow",
  },
  forgotText: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Poppins-Bold",
    marginTop: 23,
  },
  errorMessage: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#DD1D21",
    width: "70%",
    textAlign: "right",
  },
})
