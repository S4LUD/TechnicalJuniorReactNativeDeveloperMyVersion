import { AppStyle_v2 } from "../AppStyle";
import { View, Text } from "react-native";

export default function FooterLogoComponent() {
  return (
    <View style={AppStyle_v2.FooterLogoContainer}>
      <View style={AppStyle_v2.FooterLogo}>
        <Text style={AppStyle_v2.FooterLogoTitle}>LOGO</Text>
      </View>
    </View>
  );
}
