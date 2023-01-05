import { Image, View, Text } from "react-native";
import { AppStyle } from "../AppStyle";

export default function RecommendComponent({ item }) {
  return (
    <View style={AppStyle.RecommendedItemsWrapper}>
      <View style={AppStyle.RecommendWrapperTitle}>
        <Text style={AppStyle.RecommendTitle}>-{item.discount}%</Text>
      </View>
      <Image style={AppStyle.RecommendedImage} source={item.image} />
      <View style={AppStyle.RecommendTitlePriceContainer}>
        <View style={AppStyle.RecommendTitlePriceWrapper}>
          <Text style={AppStyle.RecommendTitlePrice}>
            ₱{Math.round(item.price - (item.price / 100) * item.discount)}
          </Text>
          <Text style={AppStyle.RecommendPreviousPrice}>₱{item.price}</Text>
        </View>
        <Text style={AppStyle.RecommendCategoryTitle}>{item.category}</Text>
      </View>
    </View>
  );
}
