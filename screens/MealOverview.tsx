import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
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

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
