import { Text, TouchableOpacity } from "react-native";
import { AppStyle } from "../AppStyle";

export default function CategoryComponent({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={AppStyle.CategoryButton}>
      <Text style={AppStyle.CategoryButtonTitle}>{item}</Text>
    </TouchableOpacity>
  );
}
