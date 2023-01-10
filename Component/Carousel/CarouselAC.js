//https://reactnative.dev/docs/animations#scrollview-with-animated-event-example
//Switch From ScrollView To FlatList

import React, { useRef, useState, useEffect } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    FlatList
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from '../../config/colors'


export default ({ data, _height, _width }) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesref = useRef(null);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const viewableItemChanged = useRef(({ viewableItems }) => {
        _CurrentIndex = viewableItems[0].index
    }).current


    let _CurrentIndex
    useEffect(() => {
        const interval = setInterval(() => {
            if (_CurrentIndex < data.length - 1) {
                _CurrentIndex++
            } else {
                _CurrentIndex = 0;
            }
            slidesref.current.scrollToIndex({ index: _CurrentIndex });
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    return (

        <View style={[styles.scrollContainer, { height: _height, width: _width }]}>
            <FlatList
                ref={slidesref}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={viewableItemChanged}
                viewabilityConfig={viewConfig}
                style={{ borderRadius: 10 }}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }
                ],
                    { useNativeDriver: false }
                )

                }
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{ width: _width }}
                            key={item.id}
                        >
                            <ImageBackground source={item.image} style={[styles.card, { width: _width }]}>

                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .6)']}
                                    style={{ height: _height * .50, width: _width }}
                                >
                                    <Text style={{ color: 'white', position: 'absolute', bottom: 25, right: 10 }}>{item.text}</Text>
                                </LinearGradient>

                            </ImageBackground>
                        </View>
                    );
                }}
            />

            <View style={styles.indicatorContainer}>
                {data.map((_data, index) => {

                    const inputRange = [
                        _width * (index - 4),
                        _width * (index - 3),
                        _width * (index - 2),
                        _width * (index - 1),
                        _width * index,
                        _width * (index + 1),
                        _width * (index + 2),
                        _width * (index + 3),
                        _width * (index + 4),
                    ]
                    const width = scrollX.interpolate({
                        inputRange,
                        outputRange: [3,6,6,6, 12,6, 6,6,3],
                        //extrapolate: "clamp"

                    });
                    const height = scrollX.interpolate({
                        inputRange,
                        outputRange: [3,6,6,6,6, 6, 6,6,3],
                        //extrapolate: "clamp"

                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.25,0.5,0.5,0.5, 1,0.5,0.5, 0.5, 0.25],
                        //extrapolate: "clamp"
                    })
                    return (
                        <Animated.View
                            key={index}
                            style={[styles.normalDot, {height, width, opacity }]}
                        />
                    );
                })}
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",

    },
    scrollContainer: {
        //marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: 'hidden',
    },
    card: {
        flex: 1,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    normalDot: {
        //height: 6,
        //width: 6,
        borderRadius: 3,
        backgroundColor: "white",
        marginHorizontal: 3
    },
    indicatorContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 10,
    }
});
