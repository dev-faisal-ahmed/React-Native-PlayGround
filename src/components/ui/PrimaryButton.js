import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../data/colors";

export function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainerOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonContainerInner, styles.pressed] : styles.buttonContainerInner
        }
        android_ripple={{ color: colors.primary[600] }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainerOuter: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 50,
  },
  buttonContainerInner: {
    backgroundColor: colors.primary[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  // for Ios Only
  pressed: {
    opacity: 0.75,
  },
});
