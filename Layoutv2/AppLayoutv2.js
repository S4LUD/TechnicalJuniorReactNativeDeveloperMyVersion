import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppStyle_v2 } from "../AppStyle";
import { Recommendv2 } from "../Util/tempData";
import FooterLayout from "./FooterLayout";
import NavigationLayout from "./HeaderLayout";
import CategorytLayout from "./CategorytLayout";

export default function AppRequestLayout() {
  return (
    <View style={AppStyle_v2.AppRequestLayout}>
      <StatusBar style="auto" />
      <FlatList
        data={Recommendv2}
        renderItem={CategorytLayout}
        ListHeaderComponent={() => <NavigationLayout />}
        ListFooterComponent={() => <FooterLayout />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />
    </View>
  );
}
