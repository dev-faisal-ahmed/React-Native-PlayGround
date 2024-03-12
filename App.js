import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StartGameScreen } from "./src/screens/start-game-screen/StartGameScreen";
import { colors } from "./src/data/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SCREENS } from "./src/data/screens";
import { GameScreen } from "./src/screens/game-screen/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [screen, setScreen] = useState(SCREENS.START_SCREEN);

  const updateScreen = (screenName) => {
    setScreen(screenName);
  };

  const updateNumber = (number) => {
    setPickedNumber(number);
  };

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={colors.appGradientColors} style={styles.appContainer}>
        <ImageBackground
          source={require("./assets/images/bg.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={{ opacity: 0.1 }}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen === SCREENS.START_SCREEN && (
              <StartGameScreen updateNumber={updateNumber} updateScreen={updateScreen} />
            )}
            {screen === SCREENS.GAME_SCREEN && (
              <GameScreen pickedNumber={pickedNumber} updateScreen={updateScreen} />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.accent[500],
  },
  rootScreen: { flex: 1 },
});
