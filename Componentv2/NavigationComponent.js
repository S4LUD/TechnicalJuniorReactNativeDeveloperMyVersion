import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import { AppStyle_v2 } from "../AppStyle";

export default function NavigationComponent() {
  return (
    <View style={AppStyle_v2.NavigationLayout}>
      <View style={AppStyle_v2.NavigationLayout_TopWrapper}>
        <View style={AppStyle_v2.NavLeftContent}>
          <View style={AppStyle_v2.NavLeftContentWrapper}>
            <Ionicons name="ios-menu-sharp" size={25} />
          </View>
        </View>
        <View style={AppStyle_v2.NavMiddleContent}>
          <View style={AppStyle_v2.NavMiddleContentWrapper}>
            <Text style={AppStyle_v2.NavMiddleTitle}>LOGO</Text>
          </View>
        </View>
        <View style={AppStyle_v2.NavRightContent}>
          <View style={AppStyle_v2.NavRightContentWrapper1}>
            <Ionicons name="ios-basket-outline" size={25} />
          </View>
          <View style={AppStyle_v2.NavRightContentWrapper2}>
            <Ionicons name="ios-star-outline" size={25} />
          </View>
        </View>
      </View>
    </View>
  );
}
