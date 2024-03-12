import { StyleSheet, View } from "react-native";
import { colors } from "../../data/colors";

export function Card({ children, customStyles }) {
  return <View style={[styles.container, customStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: colors.primary[800],
    borderRadius: 10,
    elevation: 5,
    paddingVertical: 15,
  },
});
