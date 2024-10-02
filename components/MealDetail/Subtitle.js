import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e4bb99",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e4bb99",
    borderBottomWidth: 2,
  },
});
