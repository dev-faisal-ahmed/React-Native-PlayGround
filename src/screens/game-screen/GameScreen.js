import { Title } from "../../components/ui/Title";
import { StyleSheet, View, Alert, FlatList, Text } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { GuessContainer } from "../../components/game/GuessContainer";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { SCREENS } from "../../data/screens";
import { Card } from "../../components/ui/Card";
import { GuessLog } from "../../components/game/GuessLog";

const DIRECTION = {
  HIGH: "HIGH",
  LOW: "LOW",
};

export function GameScreen({ pickedNumber, updateScreen }) {
  const minRef = useRef(0);
  const maxRef = useRef(999);

  const guess = useCallback(
    () => Math.floor(Math.random() * (maxRef.current - minRef.current)) + minRef.current,
    []
  );

  const [guessedNumber, setGuessedNumber] = useState(guess());
  const [logs, setLogs] = useState([]);

  const updateGuess = () => {
    const guessed = guess();
    setGuessedNumber(guessed);
    setLogs((prev) => [guessed, ...prev]);
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
      <Card customStyles={{ paddingVertical: 30 }}>
        <GuessContainer number={guessedNumber} />
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => handleDirection(DIRECTION.HIGH)}>Guess Higher</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => handleDirection(DIRECTION.LOW)}>Guess Lower</PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={{ marginTop: 20, paddingBottom: 20, flex: 1 }}>
        <FlatList
          data={logs}
          renderItem={(itemData) => (
            <GuessLog guessNumber={logs.length - itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
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
