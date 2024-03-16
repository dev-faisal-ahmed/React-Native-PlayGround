import { FlatList, View } from "react-native";
import { CATEGORIES } from "../../data/food-data";
import { CategoryItem } from "./CategoryItem";

export function CategoriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        renderItem={(category) => <CategoryItem {...category.item} />}
        numColumns={2}
      />
    </View>
  );
}
