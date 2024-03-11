import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";
import { colors } from "../styles-data/colors";

export function GoalInput({ onGoalAdded, onHideModal }) {
  const [inputData, setInputData] = useState(null);

  const inputOnChange = (text) => {
    setInputData(text);
  };

  const handleAddGoal = () => {
    if (!inputData) return;
    onGoalAdded(inputData);
    setInputData(null);
    onHideModal();
  };

  return (
    <View style={styles.InputContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/goal.png")} />
      </View>
      <TextInput
        value={inputData}
        onChangeText={inputOnChange}
        style={styles.textInput}
        placeholder="Write Your Goal"
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button onPress={onHideModal} title="Cancel" color={colors.errorColor} />
        </View>
        <View style={styles.button}>
          <Button onPress={handleAddGoal} title="Add Goal" color={colors.primaryColor} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.inputColor,
    backgroundColor: colors.inputColor,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    gap: 30,
  },
  button: {
    width: "30%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
