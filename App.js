import { StyleSheet, ImageBackground } from "react-native";
import { StartGameScreen } from "./src/screens/start-game-screen/StartGameScreen";
import { colors } from "./src/data/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={colors.appGradientColors} style={styles.appContainer}>
        <ImageBackground
          source={require("./assets/images/bg.png")}
          resizeMode="cover"
          style={styles.bgImage}
          imageStyle={{ opacity: 0.1 }}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
  bgImage: {
    flex: 1,
  },
});
