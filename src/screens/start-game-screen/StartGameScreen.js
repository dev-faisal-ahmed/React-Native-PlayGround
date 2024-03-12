import { StyleSheet, TextInput, View, Alert } from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";
import { colors } from "../../data/colors";
import { useState } from "react";
import { SCREENS } from "../../data/screens";

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
    if (isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber > 99) {
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
    <View style={styles.inputContainer}>
      <TextInput
        value={number}
        style={styles.numberInput}
        maxLength={2}
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 15,
    backgroundColor: colors.primary[800],
    borderRadius: 10,
    elevation: 5,
    paddingBottom: 15,
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
