import { View, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppStyle, ConstantsValue } from "../AppStyle";

export default function RightNavigationComponent(params) {
  return (
    <View style={AppStyle.RightNavigationComponent}>
      <Pressable>
        <Ionicons
          name="ios-basket-outline"
          size={ConstantsValue.defaultIconSize}
        />
      </Pressable>
      <Pressable style={AppStyle.HeartIcon}>
        <Ionicons
          name="ios-heart-outline"
          size={ConstantsValue.defaultIconSize}
        />
      </Pressable>
    </View>
  );
}
