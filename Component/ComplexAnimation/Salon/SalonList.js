import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import { SharedElement} from 'react-navigation-shared-element';
import Salon from './Salon'
import { width, height, SPACING } from '../theme/'

export const ITEM_HEIGHT = height * 0.18

export default ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={Salon}
                keyExtractor={item => item.key}
                contentContainerStyle={{ padding: SPACING }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SalonListDetails', { item })
                            }}
                            style={{ marginBottom: SPACING, height: ITEM_HEIGHT }}
                        >
                            <View style={{ flex: 1, padding: SPACING }}>
                                <SharedElement id={`item.${item.key}.bg`}
                                    style={[StyleSheet.absoluteFillObject]}
                                >
                                    <View
                                        style={[
                                            StyleSheet.absoluteFillObject,
                                            { backgroundColor: item.color, borderRadius: 16 }
                                        ]}
                                    />
                                </SharedElement>
                                <SharedElement id={`item.${item.key}.name`}>
                                    <Text style={styles.name}>{item.name}</Text>
                                </SharedElement>
                                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                                <SharedElement id={`item.${item.key}.image`}
                                    style={styles.image}
                                >
                                    <Image source={item.image} style={styles.image} />
                                </SharedElement>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <SharedElement id="general.bg">
                <View style={styles.bg} />
            </SharedElement>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 18,
        position:'absolute',
        right:0
    },
    jobTitle: {
        fontSize: 11,
        opacity: 0.7,
        marginTop:18*1.3
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        left: SPACING
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'red',
        transform: [{ translateY: height }],
        borderRadius: 32,

    },
});
