import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
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
    padding: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    borderColor: "#bbb",
  },
});
