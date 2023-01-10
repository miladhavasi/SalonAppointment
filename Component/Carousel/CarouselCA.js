import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import CarouselCAItem from './CarouselCAItem';

const data = [
    { id: 1, title: 'Title 1', description: 'Des 1', image: require('../../assets/Images/Banner-01.jpg') },
    { id: 2, title: 'Title 2', description: 'Des 2', image: require('../../assets/Images/Banner-02.jpg') },
    { id: 3, title: 'Title 3', description: 'Des 3', image: require('../../assets/Images/Banner-03.jpg') },
    { id: 4, title: 'Title 4', description: 'Des 4', image: require('../../assets/Images/Banner-04.jpg') },
    { id: 5, title: 'Title 5', description: 'Des 5', image: require('../../assets/Images/Banner-05.jpg') },
]
export default () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    })
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CarouselCAItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    //scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});