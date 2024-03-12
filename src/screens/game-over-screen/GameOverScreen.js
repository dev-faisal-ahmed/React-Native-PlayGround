import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { colors } from "../../data/colors";
import { SCREENS } from "../../data/screens";

export function GameOverScreen({ updateScreen }) {
  return (
    <View style={styles.screen}>
      <Text style={{ textAlign: "center", color: colors.white, fontWeight: "bold", fontSize: 35 }}>
        Game Over!!
      </Text>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <PrimaryButton onPress={() => updateScreen(SCREENS.START_SCREEN)}>New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: "center",
  },
});
