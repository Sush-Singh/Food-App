import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e4bb99",
  },
  itemText: {
    color: "#350c0c",
    textAlign: "center",
  },
});
