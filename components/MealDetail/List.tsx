import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.container} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "white",
  },
  itemText: {
    color: "#444",
    textAlign: "center",
  },
});

export default List;
