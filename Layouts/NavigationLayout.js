import { View, Text } from "react-native";
import { AppStyle } from "../AppStyle";
import LeftNavigationComponent from "../Components/LeftNavigationComponent";
import MiddleNavigationComponent from "../Components/MiddleNavigationComponent";
import RightNavigationComponent from "../Components/RightNavigationComponent";
import TopNavigationComponent from "../Components/TopNavigationComponent";

export default function NavigationLayout() {
  return (
    <View style={AppStyle.NavigationLayout}>
      <TopNavigationComponent />
      <View style={AppStyle.NavigationLayout_TopWrapper}>
        <LeftNavigationComponent />
        <MiddleNavigationComponent />
        <RightNavigationComponent />
      </View>
    </View>
  );
}
