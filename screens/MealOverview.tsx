import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummyData";

export default function MealOverview({ route, navigation }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [categoryId, navigation]);

  function renderMeal(itemData) {
    const { id, title, imageUrl, affordability, complexity, duration } =
      itemData.item;

    return (
      <MealItem
        {...{ id, title, imageUrl, affordability, complexity, duration }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
