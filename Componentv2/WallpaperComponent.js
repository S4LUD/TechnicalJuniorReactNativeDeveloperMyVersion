import { View, Image, Text, Pressable } from "react-native";
import { AppStyle_v2 } from "../AppStyle";
import FeatureComponent from "./FeatureComponent";
import Wallpaper from "../assets/images/Slides/Slide_03.jpg";

export default function WallpaperComponent() {
  return (
    <View style={AppStyle_v2.WallpaperContainer}>
      <Image style={AppStyle_v2.Wallpaper} source={Wallpaper} />
      <View style={AppStyle_v2.ShopNowContainer}>
        <Pressable style={AppStyle_v2.ShopNowButton}>
          <Text style={AppStyle_v2.ShopNowButtonTitle}>Shop Now</Text>
        </Pressable>
      </View>
      <FeatureComponent />
    </View>
  );
}
