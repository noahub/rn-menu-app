import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import MealOverview from "./screens/MealOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealCategories">
          <Stack.Screen name="MealCategories" component={Categories} />
          <Stack.Screen name="MealOverview" component={MealOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
