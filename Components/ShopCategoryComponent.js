import { View, Text, Image } from "react-native";
import { AppStyle } from "../AppStyle";

export default function ShopCategoryComponent({ item }) {
  return (
    <View style={AppStyle.ShopCategoryComponent}>
      <View style={AppStyle.ShopCategoryImageWrapper}>
        <Image style={AppStyle.ShopCategoryImage} source={item.image} />
      </View>
      <Text style={AppStyle.ShopCategoryImageTitle}>{item.name}</Text>
    </View>
  );
}
