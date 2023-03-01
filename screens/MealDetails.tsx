import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import MealDescription from "../components/MealDescription";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummyData";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { useAppDispatch, useAppSelector } from "../store/redux/hooks";

export default function MealDetails({ route, navigation }) {
  const { mealId } = route.params;

  const {
    imageUrl,
    title,
    ingredients,
    duration,
    complexity,
    affordability,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  // const context = useContext(FavoritesContext);

  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const isFavorite = favoriteMealIds.includes(mealId);
  const dispatch = useAppDispatch();

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "star" : "star-outline"}
          color={"white"}
          onPress={toggleFavoriteHandler}
        />
      ),
    });
  }, [navigation, toggleFavoriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDescription {...{ duration, complexity, affordability }} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontFamily: "inter-bold",
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  subTitle: {
    fontSize: 18,
    margin: 4,
    fontFamily: "inter-bold",
    textAlign: "center",
    padding: 6,
    color: "#a80800",
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderColor: "#bbb",
  },
});
