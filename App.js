import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.appContainer}>
        <Text style={styles.text}>Hey There!!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: { textAlign: "center" },
});
