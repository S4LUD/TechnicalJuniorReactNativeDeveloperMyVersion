import { View, Text } from "react-native";
import { AppStyle } from "../AppStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FlashSaleListFooterComponent() {
  return (
    <View style={AppStyle.FlashSaleListFooterComponent}>
      <Ionicons
        name="ios-chevron-forward-circle-outline"
        size={25}
        color="#333333"
      />
      <Text style={AppStyle.FlashSaleListFooterTitle}>See More</Text>
    </View>
  );
}
