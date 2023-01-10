import React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    { id: 1, image: require("../../assets/Images/Film-01.jpg") },
    { id: 2, image: require("../../assets/Images/Film-02.jpg") },
    { id: 3, image: require("../../assets/Images/Film-03.jpg") },
    { id: 4, image: require("../../assets/Images/Film-04.jpg") },
    { id: 5, image: require("../../assets/Images/Film-05.jpg") },
];

const imageW = width * 0.7;
const imageH = imageW * 1.77;

export default () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>

            <StatusBar hidden />

            <View style={{}}>
                {data.map((item, index) => {

                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return <Animated.Image
                        key={`image-${index}`}
                        source={item.image}
                        style={[StyleSheet.absoluteFill,{ opacity, width, height }]}
                        blurRadius={15}
                    />
                })}
            </View>

            <Animated.FlatList
                data={data}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {
                    return <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={item.image}
                            style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                                borderRadius: 16
                            }}
                        />
                    </View>
                }} />
        </View>
    );
}
