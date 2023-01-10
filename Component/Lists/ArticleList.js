import React, { useRef } from "react";
import { FlatList, View, Animated, TouchableOpacity, ImageBackground, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ArticleCard from "../Cards/ArticleCard";
import CategoryData from '../../Data/CategoryData';
import { SharedElement } from 'react-navigation-shared-element';
import colors from '../../config/colors'

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const ArticleList = ({ navigation, data, height, width }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        listKey="{recent-event}"
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={() => <View style={{ width: "100%", height: 16 }} />}
        onScroll={Animated.event([{
          nativeEvent: { contentOffset: { y: scrollY } }
        }],
          { useNativeDriver: true }

        )

        }

        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            (height + 16) * index,
            (height + 16) * (index + 1),
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
          })
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ArticleDetailScreen', { article:item})
              }}

            >
              <Animated.View style={{ transform: [{ scale }], opacity: scale }}>
                <SharedElement id={`item.${item.id}.bg`}>
                  <ImageBackground source={item.image} style={[styles.imageBackground, { width, height }]}>
                    <Animated.View style={{opacity:1}}>
                      <LinearGradient colors={[colors.gradientblue30, colors.gradientred30]} style={{ width, height }}>
                        <View style={{ position: "absolute", backgroundColor: colors.black20, height, width, }}></View>
                      </LinearGradient>
                    </Animated.View>
                  </ImageBackground>
                </SharedElement>

                <SharedElement id={`item.${item.id}.category`} style={{ position: 'absolute', marginTop: height - 70, marginLeft: 28, }}>
                  <Text style={styles.category}>
                    {CategoryData.filter(x => x.id == item.category)[0].title}
                  </Text>
                </SharedElement>

                <SharedElement id={`item.${item.id}.title`} style={{ position: 'absolute', marginTop: height - 40, marginLeft: 20, maxWidth: width - 40, }}>
                  <Text style={[styles.title]}>{item.title}</Text>
                </SharedElement>
              </Animated.View>

            </TouchableOpacity>
          )
        }}
      />
      <SharedElement id="general.bg">
        <View style={styles.bg} />
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    borderRadius: 20,
    overflow: "hidden",
    resizeMode: 'contain'
  },
  category: {
    fontFamily: "Iran-Sans-Bold",
    fontSize: 16,
    color: "white",
  },
  title: {
    fontFamily: "Iran-Sans-Light",
    fontSize: 12,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    padding: 4,
    paddingHorizontal: 8,
    numberOfLines: 1,
    maxHeight: 30,


  },
  bg: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight - (windowWidth / 4 * 3),
    backgroundColor: 'red',
    //transform: [{ translateY: windowHeight }],
    marginTop: windowHeight,
    borderRadius: 16,

  },
})
export default ArticleList

