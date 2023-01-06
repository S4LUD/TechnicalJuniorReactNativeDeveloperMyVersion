import { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { AppStyle } from "../AppStyle";
import AppContext from "../Context/";

export default function SwitchComponent() {
  const { isVersion, setVersion } = useContext(AppContext);

  return (
    <View style={AppStyle.SwitchContainer}>
      <Pressable
        onPress={() => setVersion(0)}
        style={[
          AppStyle.SwitchButton,
          isVersion === 0 && AppStyle.ActiveButton,
          {
            borderTopStartRadius: 30,
            borderBottomLeftRadius: 30,
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            fontWeight: "500",
            color: isVersion === 0 ? "#72D72D" : "black",
          }}
        >
          v1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setVersion(1)}
        style={[
          AppStyle.SwitchButton,
          isVersion === 1 && AppStyle.ActiveButton,
          {
            borderTopEndRadius: 30,
            borderBottomRightRadius: 30,
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            fontWeight: "500",
            color: isVersion === 1 ? "#72D72D" : "black",
          }}
        >
          v2
        </Text>
      </Pressable>
    </View>
  );
}
