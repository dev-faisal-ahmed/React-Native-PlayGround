import { Image, Pressable, Text, View } from "react-native";
import { colors } from "../../data/style-data";

export function MealCard({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View
      style={{
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: colors.white,
        elevation: 10,
      }}
    >
      <Pressable>
        <View>
          <Image style={{ width: "100%", height: 200 }} source={{ uri: imageUrl }} />
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>{title}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginVertical: 10,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{duration} m</Text>
          <Text style={{ fontWeight: "bold" }}>{complexity.toUpperCase()}</Text>
          <Text style={{ fontWeight: "bold" }}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}
