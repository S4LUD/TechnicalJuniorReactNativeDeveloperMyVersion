import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppStyle, ConstantsValue } from "../AppStyle";

export default function LeftNavigationComponent() {
  return (
    <Pressable style={AppStyle.LeftNavigationComponent}>
      <Ionicons
        name="ios-mail-unread-outline"
        size={ConstantsValue.defaultIconSize}
      />
    </Pressable>
  );
}
