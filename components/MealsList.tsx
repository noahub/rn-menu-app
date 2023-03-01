import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
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
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
