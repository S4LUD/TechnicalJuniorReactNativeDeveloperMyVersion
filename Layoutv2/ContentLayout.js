import { View, Text, Pressable } from "react-native";
import { AppStyle_v2 } from "../AppStyle";
import ContentComponent from "../Componentv2/ContentComponent";

export default function ContentLayout() {
  return (
    <View style={AppStyle_v2.ContentLayout}>
      <View style={{ paddingBottom: 20, backgroundColor: "white" }} />
      <ContentComponent />
      <View style={AppStyle_v2.MoreContainer}>
        <Pressable style={AppStyle_v2.MoreButton}>
          <Text style={AppStyle_v2.MoreButtonTitle}>More</Text>
        </Pressable>
      </View>
    </View>
  );
}
