import { View, Image } from "react-native";
import { AppStyle_v2 } from "../AppStyle";
import R7 from "../assets/images/Recommened/R7.jpg";
import R8 from "../assets/images/Recommened/R8.jpg";
import R11 from "../assets/images/Recommened/R11.jpg";

export default function FeatureComponent() {
  return (
    <>
      <View style={AppStyle_v2.Display_1}>
        <Image source={R7} style={AppStyle_v2.DisplayImage_1} />
      </View>
      <View style={AppStyle_v2.Display_2}>
        <Image source={R8} style={AppStyle_v2.DisplayImage_2} />
      </View>
      <View style={AppStyle_v2.Display_3}>
        <Image source={R11} style={AppStyle_v2.DisplayImage_3} />
      </View>
    </>
  );
}
