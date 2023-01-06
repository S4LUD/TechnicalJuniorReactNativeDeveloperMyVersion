import { AppStyle_v2 } from "../AppStyle";
import { View, Text } from "react-native";

export default function FooterLinksComponent() {
  return (
    <View style={AppStyle_v2.Links}>
      <Text style={AppStyle_v2.LinksTitle}>collection</Text>
      <Text style={AppStyle_v2.LinksTitle}>information</Text>
      <Text style={AppStyle_v2.LinksTitle}>more</Text>
    </View>
  );
}
