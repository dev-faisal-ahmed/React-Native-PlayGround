import { Title } from "../../components/Title";
import { StyleSheet, View, Alert } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { GuessContainer } from "../../components/game/GuessContainer";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SCREENS } from "../../data/screens";

const DIRECTION = {
  HIGH: "HIGH",
  LOW: "LOW",
};

export function GameScreen({ pickedNumber, updateScreen }) {
  const minRef = useRef(0);
  const maxRef = useRef(99);

  const guess = useCallback(
    () => Math.floor(Math.random() * (maxRef.current - minRef.current)) + minRef.current,
    []
  );

  const [guessedNumber, setGuessedNumber] = useState(guess());
  const [logs, setLogs] = useState([]);

  const updateGuess = () => {
    setGuessedNumber(guess());
  };

  useEffect(() => {
    if (guessedNumber === pickedNumber) {
      Alert.alert("Yahoo!", "I guessed it right?", [
        { text: "Game Over", style: "default", onPress: () => updateScreen(SCREENS.GAME_OVER_SCREEN) },
      ]);
    }
  }, [guessedNumber]);

  const handleDirection = (direction) => {
    if (direction === DIRECTION.HIGH) {
      if (guessedNumber > pickedNumber) {
        Alert.alert("You Lied", "I know that the number is Lower");
        return;
      }
      minRef.current = guessedNumber + 1;
      updateGuess();
    } else if (direction === DIRECTION.LOW) {
      if (guessedNumber < pickedNumber) {
        Alert.alert("You Lied", "I know that the number is Higher");
        return;
      }
      maxRef.current = guessedNumber - 1;
      updateGuess();
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Your Guess! </Title>
      <GuessContainer number={guessedNumber} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={() => handleDirection(DIRECTION.HIGH)}>Guess Higher</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={() => handleDirection(DIRECTION.LOW)}>Guess Lower</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
