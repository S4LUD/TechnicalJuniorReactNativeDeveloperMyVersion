import { View, Text, Image, Pressable } from "react-native";
import { AppStyle_v2 } from "../AppStyle";

export default function CategorytLayout({ item }) {
  return (
    <View style={AppStyle_v2.CategoryLayout}>
      <Image style={AppStyle_v2.CategoryLayoutImage} source={item.image} />
      <View style={AppStyle_v2.CategoryLayoutWrapper}>
        <Pressable style={AppStyle_v2.CategoryLayoutButton}>
          <Text style={AppStyle_v2.CategoryLayoutButtonTitle}>
            {item.category}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
