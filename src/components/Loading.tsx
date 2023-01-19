import { View, Text, ActivityIndicator } from "react-native"

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090a",
      }}
    >
      <ActivityIndicator color={"#7C3AED"} />
      <Text style={{ color: "#ffff", paddingTop: 10 }}>Loading</Text>
    </View>
  )
}
