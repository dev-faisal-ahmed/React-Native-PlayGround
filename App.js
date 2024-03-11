import { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import { AllGoals } from "./src/components/AllGoals";
import { GoalInput } from "./src/components/GoalInput";
import { colors } from "./src/styles-data/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onGoalAdded = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  const onHideModal = () => {
    setShowModal(false);
  };

  const onRemove = (goal) => {
    const remainingGoals = goals.filter((eachGoal) => eachGoal !== goal);
    setGoals(remainingGoals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* inputs */}
        <Button title="Add New Goal" color={colors.primaryColor} onPress={() => setShowModal(true)} />

        <Modal visible={showModal} animationType="slide">
          <GoalInput onHideModal={onHideModal} onGoalAdded={onGoalAdded} />
        </Modal>

        <AllGoals goals={goals} onRemove={onRemove} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 30,
    flex: 1,
    gap: 10,
    backgroundColor: colors.mainBackgroundColor,
  },
});
