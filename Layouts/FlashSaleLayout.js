import { View, Text, FlatList } from "react-native";
import { AppStyle } from "../AppStyle";
import FlashSaleComponent from "../Components/FlashSaleComponent";
import FlashSaleListFooterComponent from "../Components/FlashSaleListFooterComponent";
import FlashSaleListHeaderComponent from "../Components/FlashSaleListHeaderComponent";
import FlashSaleSeperatorComponent from "../Components/FlashSaleSeperatorComponent";
import { FlashSale } from "../Util/tempData";

export default function FlashSaleLayout() {
  return (
    <View style={AppStyle.FlashSaleLayout}>
      <Text style={AppStyle.FlashSaleTitle}>Flash Sale</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FlashSale}
        renderItem={FlashSaleComponent}
        alwaysBounceHorizontal={false}
        bounces={false}
        ItemSeparatorComponent={FlashSaleSeperatorComponent}
        ListHeaderComponent={FlashSaleListHeaderComponent}
        ListFooterComponent={FlashSaleListFooterComponent}
      />
    </View>
  );
}
