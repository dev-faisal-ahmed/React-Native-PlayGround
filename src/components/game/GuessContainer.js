import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../data/colors";

export function GuessContainer({ number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent[500],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  text: {
    fontWeight: "800",
    fontSize: 45,
    textAlign: "center",
    padding: 20,
    color: colors.accent[500],
  },
});
