import { StyleSheet, Text } from "react-native";
import { colors } from "../../data/colors";

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 12,
    textAlign: "center",
    color: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    fontWeight: "900",
  },
});
