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

    return (
        <View style={[styles.scrollContainer, { height: _height, width: _width }]}>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: _width }} key={item.id}>
                            <ImageBackground source={item.image} style={[styles.card, { width: _width }]}>
                                {/* <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .6)']} style={{ height: _height * .50, width: _width }}>
                                </LinearGradient> */}
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
                        outputRange: [3, 6, 6, 6, 12, 6, 6, 6, 3],
                    });
                    const height = scrollX.interpolate({
                        inputRange,
                        outputRange: [3, 6, 6, 6, 6, 6, 6, 6, 3],
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.25, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.25],
                    })
                    return (
                        <Animated.View key={index} style={[styles.normalDot, { height, width, opacity }]} />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden',
    },
    card: {
        flex: 1,
        zIndex:-3,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    normalDot: {
        zIndex:1,
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
