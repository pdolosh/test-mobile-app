import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import Arrow from "~/view/assets/icons/arrowDown.svg"

export const Card: React.FC = () => {
  const [counter, setCounter] = React.useState(10)
  const [pause, setPause] = React.useState(false)

  React.useEffect(() => {
    const timer =
      counter > 0 && !pause && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter, pause])

  const renderText = React.useMemo(() => {
    return !pause ? "Stop" : "Start"
  }, [pause])

  return (
    <View style={styles.container}>
      <View style={styles.rightContent}>
        <Text style={styles.activeText}>ACTIVE FROM</Text>
        <View style={styles.timerBlock}>
          <Text style={styles.seconds}>{counter}</Text>
          <Text style={styles.meters}>second{counter > 1 ? "s" : ""}</Text>
        </View>
        <View style={styles.moreInfoBlock}>
          <Text style={styles.infoText}>MORE INFO</Text>
          <TouchableOpacity style={styles.iconWrapper}>
            <Arrow color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.leftContent}>
        <TouchableOpacity
          disabled={!counter}
          onPress={() => setPause(!pause)}
          style={styles.stopBtn}
        >
          <Text style={styles.btnText}>{renderText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
    height: 149,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 6,
    flexDirection: "row",
  },
  stopBtn: {
    width: 110,
    height: 27,
    backgroundColor: "#DD1D21",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
  rightContent: {
    width: "50%",
    paddingLeft: 25,
    paddingVertical: 22,
    justifyContent: "space-between",
  },
  leftContent: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 21,
    height: 21,
    borderRadius: 50,
    backgroundColor: "#E2E8E1",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 10,
    lineHeight: 15,
    marginRight: 11,
  },
  moreInfoBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  seconds: {
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    lineHeight: 54,
  },
  meters: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 11,
    marginTop: "5%",
    marginLeft: 5,
  },
  timerBlock: {
    flexDirection: "row",
  },
  activeText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
})
