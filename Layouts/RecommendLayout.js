import { View, Text } from "react-native";
import { AppStyle } from "../AppStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RecommendLayout() {
  return (
    <View style={AppStyle.RecommendLayout}>
      <Text style={AppStyle.RecommendLayoutTitle}>
        Daily Fashon Discoveries
      </Text>
      <View style={AppStyle.RecommendCategorySeeAll}>
        <Text style={AppStyle.RecommendCategorySeeAllTitle}>See All</Text>
        <Ionicons name="ios-chevron-forward-outline" size={12} />
      </View>
    </View>
  );
}
