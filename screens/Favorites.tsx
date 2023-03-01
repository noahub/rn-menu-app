import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummyData";
import { useAppSelector } from "../store/redux/hooks";

const Favorites = ({}) => {
  // const context = useContext(FavoritesContext);
  const favoreMealIds = useAppSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => favoreMealIds.includes(meal.id));

  return (
    <View style={styles.container}>
      {favoriteMeals.length < 1 ? (
        <Text>No favorite meals yet</Text>
      ) : (
        <MealsList items={favoriteMeals} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Favorites;
