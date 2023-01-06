import Ionicons from "react-native-vector-icons/Ionicons";
import { AppStyle_v2 } from "../AppStyle";
import { View, Text } from "react-native";

export default function FooterSocialComponent() {
  return (
    <>
      <View style={AppStyle_v2.SocialContainer}>
        <View style={AppStyle_v2.SocialWrapper}>
          <Ionicons name="ios-navigate-outline" size={25} color="#727272" />
          <Text style={AppStyle_v2.SocialWrapperTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </View>
        <View style={AppStyle_v2.SocialWrapper}>
          <Ionicons
            name="ios-phone-portrait-outline"
            size={25}
            color="#727272"
          />
          <Text style={AppStyle_v2.SocialWrapperTitle}>Lorem ipsum</Text>
        </View>
        <View style={AppStyle_v2.SocialWrapper}>
          <Ionicons name="ios-mail-outline" size={25} color="#727272" />
          <Text style={AppStyle_v2.SocialWrapperTitle}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>
      </View>
      <View style={AppStyle_v2.SocialContainer2}>
        <View style={AppStyle_v2.SocialIconsContainer}>
          <Ionicons name="ios-logo-facebook" size={25} color="white" />
        </View>
        <View style={AppStyle_v2.SocialIconsContainer}>
          <Ionicons name="ios-logo-pinterest" size={25} color="white" />
        </View>
        <View style={AppStyle_v2.SocialIconsContainer}>
          <Ionicons name="ios-logo-instagram" size={25} color="white" />
        </View>
      </View>
    </>
  );
}
