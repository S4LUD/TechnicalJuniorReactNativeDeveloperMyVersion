import { View, Text } from "react-native";
import { AppStyle } from "../AppStyle";
import ShopCategoryComponent from "../Components/ShopCategoryComponent";
import { ShopCategory } from "../Util/tempData";

export default function ShopCategoryLayout() {
  return (
    <View style={AppStyle.ShopCategoryLayout}>
      <View style={AppStyle.ShopCategoryWrapper}>
        <Text style={AppStyle.ShopCategoryTitle}>Shop by Category</Text>
      </View>
      <View style={AppStyle.ShopCategoryContainer}>
        {ShopCategory.map((item, index) => (
          <ShopCategoryComponent key={index} item={item} />
        ))}
      </View>
    </View>
  );
}
