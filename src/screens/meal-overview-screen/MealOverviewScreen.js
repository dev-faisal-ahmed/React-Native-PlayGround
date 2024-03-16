import { useRoute } from "@react-navigation/native";
import { FlatList, View, Text } from "react-native";
import { MEALS } from "../../data/food-data";
import { MealCard } from "./MealCard";

export function MealOverviewScreen() {
  const route = useRoute();
  const id = route.params.id;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={(meal) => <MealCard {...meal.item} />}
      />
    </View>
  );
}
