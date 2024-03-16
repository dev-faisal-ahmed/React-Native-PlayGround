import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

export function CategoryItem({ title, color, id }) {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={{
        flex: 1,
        backgroundColor: color,
        height: 150,
        margin: 10,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
      onPress={() => navigation.navigate("MealOverview", { id })}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
}
