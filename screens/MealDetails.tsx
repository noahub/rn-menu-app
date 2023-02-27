import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import MealDescription from "../components/MealDescription";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummyData";

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

  const pressHandler = () => console.log("pressed");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon={"star"} color={"white"} onPress={pressHandler} />
      ),
    });
  }, [navigation, pressHandler]);

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
