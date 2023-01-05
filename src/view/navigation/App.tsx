import AsyncStorage from "@react-native-async-storage/async-storage"
import { useReduxDevToolsExtension } from "@react-navigation/devtools"
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

import { AuthNavigator } from "./Auth"
import { HomeNavigator } from "./Home"

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
}

const AppStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

const AuthStackNav = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name="Auth" component={AuthNavigator} />
    <AppStack.Screen name="Home" component={HomeNavigator} />
  </AuthStack.Navigator>
)

const AppStackNav = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AppStack.Screen name="Home" component={HomeNavigator} />
    <AuthStack.Screen name="Auth" component={AuthNavigator} />
  </AuthStack.Navigator>
)

export const AppNavigator: React.FC = () => {
  const [token, setToken] = React.useState<string>("")
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      if (value !== null) {
        setToken(value)
      }
    } catch (e) {
      // error reading value
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  const navigationRef = useNavigationContainerRef()

  useReduxDevToolsExtension(navigationRef)

  const handleNavigationStack = React.useCallback(() => {
    if (token) {
      return <AppStackNav />
    } else {
      return <AuthStackNav />
    }
  }, [token])

  return <NavigationContainer>{handleNavigationStack()}</NavigationContainer>
}
