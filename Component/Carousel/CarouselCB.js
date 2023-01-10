import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Animated, Button } from 'react-native';
import CarouselCBItem from './CarouselCBItem';
import CarouselCBPaginator from './CarouselCBPaginator';
import CarouselCBNextButton from './CarouselCBNextButton';

const slides = [
    { id: 1, title: 'Quick a Easy Payments', description: 'Grow your business by accepting card payments with the new card reader.', image: require("../../assets/Images/CreaditCard.png") },
    { id: 2, title: 'Smart Point of Sale', description: 'Complete point of sale software tailored to your bussiness needs.', image: require("../../assets/Images/Computer.png") },
    { id: 3, title: 'Instant notifications', description: 'Instant notifications let your quickly see new purchases and messages.', image: require("../../assets/Images/Notification.png") },
    { id: 4, title: 'Customize Ecerything', description: 'Adjust your system to speed up your checkout.', image: require("../../assets/Images/Customize.png") },
];

export default () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesref = useRef(null);

    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesref.current.scrollToIndex({ index: currentIndex + 1 })
        } else {
            console.log('Last Item.')
        }
    }
    return (
        <View style={styles.container}>

            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <CarouselCBItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesref}
                />
            </View>

            <CarouselCBPaginator data={slides} scrollX={scrollX} />
            <CarouselCBNextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
            <Button
                onPress={()=>console.log(currentIndex)}
                title="Get Index"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
    //(currentIndex+1)*(100/slides.length)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",

    }
})