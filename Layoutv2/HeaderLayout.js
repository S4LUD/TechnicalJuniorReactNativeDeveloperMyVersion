import { View } from "react-native";
import { AppStyle_v2 } from "../AppStyle";
import NavigationComponent from "../Componentv2/NavigationComponent";
import WallpaperComponent from "../Componentv2/WallpaperComponent";

export default function NavigationLayout() {
  return (
    <View style={AppStyle_v2.NavigationLayoutContainer}>
      <WallpaperComponent />
      <NavigationComponent />
    </View>
  );
}
