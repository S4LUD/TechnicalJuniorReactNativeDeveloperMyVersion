import { View, Text, FlatList } from "react-native";
import CategoryComponent from "../Components/CategoryComponent";
import { Category } from "../Util/tempData";

export default function CategoryLayout() {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Category}
        renderItem={CategoryComponent}
        alwaysBounceHorizontal={false}
        bounces={false}
      />
    </View>
  );
}
