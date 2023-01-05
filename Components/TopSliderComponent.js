import { useCallback, useState, useRef } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AppStyle } from "../AppStyle";
import { TopImageData } from "../Util/tempData";
import SliderComponent from "./SliderComponent";

export default function TopSliderComponent() {
  return (
    <View style={AppStyle.TopSliderComponent}>
      <View style={AppStyle.ShopNow} pointerEvents="box-none">
        <Pressable style={AppStyle.ShopNowButton}>
          <Text style={AppStyle.ShopNowButtonTitle}>SHOP NOW</Text>
        </Pressable>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={TopImageData}
        renderItem={SliderComponent}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
