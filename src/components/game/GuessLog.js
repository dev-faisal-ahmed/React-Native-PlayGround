import { Text, View } from "react-native";
import { colors } from "../../data/colors";

export function GuessLog({ guessNumber, guess }) {
  return (
    <View
      style={{
        backgroundColor: colors.accent[500],
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        marginVertical: 5,
      }}
    >
      <Text style={{ fontSize: 20 }}>#{guessNumber} : </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{guess}</Text>
    </View>
  );
}
