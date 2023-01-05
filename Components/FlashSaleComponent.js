import { View, Text, Image } from "react-native";
import { AppStyle } from "../AppStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FlashSaleComponent({ item }) {
  return (
    <View style={AppStyle.FlashSaleComponent}>
      <View style={AppStyle.FlashSaleDiscount}>
        <Ionicons name="ios-flash-sharp" size={14} />
        <Text style={AppStyle.FlashSaleDiscountPercentage}>
          -{item.discount}%
        </Text>
      </View>
      <Image source={item.image} style={AppStyle.FlashSaleImages} />
      <View style={AppStyle.FlashSalePriceWrapper}>
        <Text style={AppStyle.FlashSaleDiscountedPrice}>
          ₱{Math.round(item.price - (item.price / 100) * item.discount)}
        </Text>
        <Text style={AppStyle.FlashSalePreviousPrice}>₱{item.price}</Text>
      </View>
    </View>
  );
}
