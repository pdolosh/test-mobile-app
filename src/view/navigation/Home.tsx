import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

// import { DisclaimerScreen } from '~/view/screens/Disclaimer';
import { StationScreen } from "~/view/screens/Station"
import { DetailsScreen } from "~/view/screens/Details"

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
}

const HomeStack = createNativeStackNavigator()

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="StationScreen" component={StationScreen} />
      <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}
