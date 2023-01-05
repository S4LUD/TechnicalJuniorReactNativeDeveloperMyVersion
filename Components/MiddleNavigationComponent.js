import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppStyle, ConstantsValue } from "../AppStyle";

export default function MiddleNavigationComponent() {
  return (
    <Pressable style={AppStyle.MiddleNavigationComponent}>
      <Ionicons name="ios-logo-capacitor" size={ConstantsValue.defaultIconSize} />
    </Pressable>
  );
}
