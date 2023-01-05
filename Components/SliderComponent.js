import { Image } from "react-native";
import { AppStyle } from "../AppStyle";

export default function SliderComponent({ item }) {
  return (
    <Image
      source={item.image}
      style={AppStyle.TopSliderImage}
    />
  );
}
