import { FlatList, View, StyleSheet, Text } from "react-native";
import { colors } from "../styles-data/colors";

export function AllGoals({ goals, onRemove }) {
  return (
    <View style={styles.goalContainer}>
      {goals.length ? (
        <>
          <FlatList
            data={goals}
            style={styles.goalItems}
            keyExtractor={(item) => item}
            renderItem={(goal) => (
              <Text onPress={() => onRemove(goal.item)} style={styles.goalItem}>
                {goal.item}
              </Text>
            )}
          />
        </>
      ) : (
        <Text style={styles.notifier}>No List Found, Please Add Some</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: { flex: 0.9 },
  notifier: { textAlign: "center", fontSize: 18, color: "#fff", marginTop: 10 },
  goalItems: { marginTop: 20, gap: 10 },
  goalItem: {
    backgroundColor: colors.inputColor,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
});
