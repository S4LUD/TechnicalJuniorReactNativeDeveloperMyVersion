import { View, ScrollView } from "react-native";
import { AppStyle } from "../AppStyle";
import CategoryLayout from "./CategoryLayout";
import NavigationLayout from "./NavigationLayout";

export default function HomeLayout({ children }) {
  return (
    <View style={AppStyle.HomeLayout}>
      <NavigationLayout />
      <CategoryLayout />
      {children}
    </View>
  );
}
