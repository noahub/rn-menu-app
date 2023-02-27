import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDescription from "./MealDescription";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation<any>();

  const selecMealHandler = () =>
    navigation.navigate("MealDetails", { mealId: id });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#aaa" }}
        style={({ pressed }) => pressed && styles.btnPressed}
        onPress={selecMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDescription {...{ duration, complexity, affordability }} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: { width: "100%", height: 200 },
  btn: {},
  btnPressed: { opacity: 0.4 },
  title: {
    fontFamily: "inter-bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
});
