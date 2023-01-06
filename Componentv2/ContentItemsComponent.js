import { FlatList, View, Text, Image } from "react-native";

import { AppStyle_v2 } from "../AppStyle";

export default function ContentItemsComponent({ item, index }) {
  if (item.empty)
    return (
      <View
        style={[AppStyle_v2.ContentWrapper, { backgroundColor: "transparent" }]}
      />
    );
  return (
    <View
      key={index}
      style={[AppStyle_v2.ContentWrapper, { marginBottom: 20 }]}
    >
      <View style={AppStyle_v2.ContentDiscount}>
        <Text style={AppStyle_v2.ContentDiscountTitle}>
          {item.discount}% OFF
        </Text>
      </View>
      <Image style={AppStyle_v2.ContentItem} source={item.image} />
      <Text style={AppStyle_v2.ContentItemTitle1}>lorem ipsum</Text>
      <Text style={AppStyle_v2.ContentItemTitle2}>lorem ipsum</Text>
    </View>
  );
}
