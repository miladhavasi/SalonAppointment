import React from "react";
import { View, ImageBackground, Text,Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from '../../config/colors'

export default ({ image, category, title, width, height, paddingleft }) => {
  return (
    <View style={{  paddingleft }}>
      <ImageBackground
        source={image}
        style={{
          width,
          height,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          colors={[colors.gradientblue30, colors.gradientred30]}
          style={{ width, height }}
        ></LinearGradient>
        <View
          style={{
            position: "absolute",
            backgroundColor: colors.black20,
            height,
            width,
          }}
        ></View>
        <View style={{ position: "absolute", left: 20, bottom: 12,alignItems:'flex-start' }}>
          <Text
            style={{
              paddingHorizontal:8,
              fontFamily: "Iran-Sans-Bold",
              fontSize: 16,
              color: "white",
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              borderRadius: 20,
              paddingHorizontal: 8,
              paddingVertical: 3,
              fontFamily: "Iran-Sans-Light",
              fontSize: 12,
              numberOfLines: 1,
              maxWidth: width - 40,
              backgroundColor: 'rgba(255,255,255,.6)',
              alignSelf: "flex-start",
              maxHeight: 30
            }}
          >
            {title}
          </Text>


        </View>
      </ImageBackground>
    </View>
  );
};

