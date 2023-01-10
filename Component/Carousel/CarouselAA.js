//https://reactnative.dev/docs/animations#scrollview-with-animated-event-example
import React, { useRef } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Button
} from "react-native";

const Data = [
    { id: 1, image: require("../../assets/Images/Banner-01.jpg"), text: "Baner 01" },
    { id: 2, image: require("../../assets/Images/Banner-02.jpg"), text: "Baner 02" },
    { id: 3, image: require("../../assets/Images/Banner-03.jpg"), text: "Baner 03" },
    { id: 4, image: require("../../assets/Images/Banner-04.jpg"), text: "Baner 04" },
    { id: 5, image: require("../../assets/Images/Banner-05.jpg"), text: "Baner 05" },
];

export default () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
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
                    )}
                    scrollEventThrottle={1}
                >
                    {Data.map((_Data, id) => {
                        return (
                            <View
                                style={{ width: windowWidth, height: 250 }}
                                key={id}
                            >
                                <ImageBackground source={_Data.image} style={styles.card}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.infoText}>
                                            {_Data.text}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {Data.map((_Data, index) => {

                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (index - 1),
                                windowWidth * index,
                                windowWidth * (index + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={index}
                                style={[styles.normalDot, { width }]}
                            />
                        );
                    })}
                </View>
                <Button
                    onPress={() => {
                        console.log(scrollX);
                    }}
                    title="Press Me"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});

