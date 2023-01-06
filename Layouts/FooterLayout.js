import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppStyle } from "../AppStyle";
import SwitchComponent from "../Components/SwitchComponent";

export default function FooterLayout() {
  return (
    <View style={AppStyle.FooterLayout}>
      <View style={AppStyle.FooterLogoContainer}>
        <View style={AppStyle.FooterLogo}>
          <Ionicons name="ios-logo-capacitor" size={40} />
        </View>
        <Text style={AppStyle.FooterLogoTitle}>xtendly</Text>
      </View>
      <View style={AppStyle.SocialContainer}>
        <View style={AppStyle.SocialWrapper}>
          <Ionicons name="ios-navigate-outline" size={20} />
          <Text style={AppStyle.SocialWrapperTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </View>
        <View style={AppStyle.SocialWrapper}>
          <Ionicons name="ios-phone-portrait-outline" size={20} />
          <Text style={AppStyle.SocialWrapperTitle}>Lorem ipsum</Text>
        </View>
        <View style={AppStyle.SocialWrapper}>
          <Ionicons name="ios-mail-outline" size={20} />
          <Text style={AppStyle.SocialWrapperTitle}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>
      </View>
      <View style={AppStyle.SocialContainer2}>
        <View style={AppStyle.SocialIconsContainer}>
          <Ionicons name="ios-logo-facebook" size={25} />
        </View>
        <View style={AppStyle.SocialIconsContainer}>
          <Ionicons name="ios-logo-pinterest" size={25} />
        </View>
        <View style={AppStyle.SocialIconsContainer}>
          <Ionicons name="ios-logo-instagram" size={25} />
        </View>
      </View>
      <View style={AppStyle.Links}>
        <Text style={AppStyle.LinksTitle}>collection</Text>
        <Text style={AppStyle.LinksTitle}>information</Text>
        <Text style={AppStyle.LinksTitle}>more</Text>
      </View>
      <View style={AppStyle.SwitchWrapper}>
        <SwitchComponent />
      </View>
    </View>
  );
}
