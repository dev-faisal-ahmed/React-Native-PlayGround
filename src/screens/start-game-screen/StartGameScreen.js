import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";
import { colors } from "../../data/colors";
import { useState } from "react";

export function StartGameScreen() {
  const [number, setNumber] = useState(null);

  const onNumberChange = (number) => {
    setNumber(number);
  };

  const onNumberConfirm = () => {};

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
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    elevation: 5,
    paddingBottom: 15,
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    paddingHorizontal: 20,
    borderBottomColor: colors.borderCOlor,
    borderBottomWidth: 2,
    color: colors.borderCOlor,
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
