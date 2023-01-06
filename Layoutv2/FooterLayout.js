import { View } from "react-native";
import { AppStyle_v2 } from "../AppStyle";
import SwitchComponent from "../Components/SwitchComponent";
import FooterLinksComponent from "../Componentv2/FooterLinksComponent";
import FooterSocialComponent from "../Componentv2/FooterSocialComponent";
import FooterLogoComponent from "../Componentv2/FooterLogoComponent";
import ContentLayout from "./ContentLayout";

export default function FooterLayoutv2() {
  return (
    <View style={AppStyle_v2.FooterLayout}>
      <ContentLayout />
      <FooterLogoComponent />
      <FooterSocialComponent />
      <FooterLinksComponent />
      <View style={AppStyle_v2.SwitchWrapper}>
        <SwitchComponent />
      </View>
    </View>
  );
}
