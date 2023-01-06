import { FlatList, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Recommend } from "../Util/tempData";
import HomeLayout from "./HomeLayout";
import RecommendComponent from "../Components/RecommendComponent";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function AppLayout() {
  return (
    <HomeLayout>
      <StatusBar style="auto" />
      <FlatList
        key="bb69e3202d76ba7ee297da0a9ce8cb88217aa9d8"
        ListHeaderComponent={<HeaderLayout />}
        ListFooterComponent={<FooterLayout />}
        showsVerticalScrollIndicator={false}
        data={Recommend}
        renderItem={RecommendComponent}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => {
          return <View style={{ paddingBottom: 13 }} />;
        }}
      />
    </HomeLayout>
  );
}
