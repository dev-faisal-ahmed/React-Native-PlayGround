import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { colors } from "../../data/colors";
import { useState } from "react";
import { SCREENS } from "../../data/screens";
import { Title } from "../../components/ui/Title";
import { Card } from "../../components/ui/Card";

export function StartGameScreen({ updateNumber, updateScreen }) {
  const [number, setNumber] = useState(null);

  const onNumberChange = (number) => {
    setNumber(number);
  };

  const resetNumber = () => {
    setNumber(null);
  };

  const onNumberConfirm = () => {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber > 999) {
      // showing alert
      Alert.alert("Invalid Input", "It Has to be a number", [
        { text: "Okay", style: "default", onPress: resetNumber },
      ]);
      return;
    }
    updateNumber(parsedNumber);
    updateScreen(SCREENS.GAME_SCREEN);
  };

  return (
    <View style={styles.screen}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={{ color: colors.accent[500], fontSize: 25, fontWeight: "bold" }}>Enter A Number</Text>
        <TextInput
          value={number}
          style={styles.numberInput}
          maxLength={3}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoComplete={"off"}
          onChangeText={onNumberChange}
        />
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={onNumberConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    marginTop: 60,
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    paddingHorizontal: 20,
    borderBottomColor: colors.accent[500],
    borderBottomWidth: 2,
    color: colors.accent[500],
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});
