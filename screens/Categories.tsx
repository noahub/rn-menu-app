import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";

export default function Categories({ navigation }) {
  function CategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={CategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
