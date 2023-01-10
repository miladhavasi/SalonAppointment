import { AntDesign } from '@expo/vector-icons'
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { detailsIcon } from './Salon';
import { width, height, SPACING } from '../theme/'
import * as Animatable from 'react-native-animatable'
import { SharedElement} from 'react-navigation-shared-element';
const DURATION = 400

import { ITEM_HEIGHT } from './SalonList'
const TOP_HEADER_HEIGHT = height * 0.3

 const SalonListDetails=({ navigation, route }) => {
    const { item } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <AntDesign
                name='arrowleft'
                size={28}
                style={{
                    padding: 12,
                    position: 'absolute',
                    top: SPACING * 2,
                    right: SPACING,
                    zIndex: 2,
                }}
                color={'#333'}
                onPress={() => {
                    navigation.goBack()
                }}
            />
            <SharedElement id={`item.${item.key}.bg`}>
                <View
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            backgroundColor: item.color,
                            borderRadius: 0,
                            height: TOP_HEADER_HEIGHT + 32
                        }
                    ]}
                />
            </SharedElement>
            <SharedElement id={`item.${item.key}.name`}>
                <Text style={styles.name}>{item.name}</Text>
            </SharedElement>
            <SharedElement id={`item.${item.key}.image`}>
                <Image source={item.image} style={styles.image} />
            </SharedElement>
            <SharedElement id='general.bg'>
                <View style={styles.bg}>
                    <ScrollView>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginVertical: SPACING,
                                marginBottom: SPACING + 32,
                            }}>
                            {detailsIcon.map((detail, index) => {
                                return (
                                    <Animatable.View
                                        animation='bounceIn'
                                        delay={DURATION + index * 100}
                                        key={`${detail.icon}-${index}`}
                                        style={{
                                            backgroundColor: detail.color,
                                            height: 64,
                                            width: 64,
                                            borderRadius: 32,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <AntDesign name={detail.icon} size={22} color={'white'} />
                                    </Animatable.View>
                                )
                            })}
                        </View>
                        <View>
                            {item.categories.map((category, index) => {
                                return (
                                    <Animatable.View
                                        animation='fadeInUp'
                                        delay={DURATION * 2 + index * 200}
                                        key={category.key}
                                        style={{ marginVertical: SPACING }}
                                    >
                                        <Text style={styles.title}>{category.title}</Text>
                                        {category.subcats.map((subcat, index) => {
                                            return (
                                                <View
                                                key={index}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        marginBottom: SPACING / 2,
                                                        marginRight: SPACING,
                                                    }}>
                                                    <Text style={styles.subTitle}>{subcat}</Text>
                                                    <View
                                                        style={{
                                                            height: 8,
                                                            width: 8,
                                                            borderRadius: 4,
                                                            backgroundColor: 'gold',
                                                            marginLeft: SPACING
                                                        }}
                                                    />
                                                </View>
                                            )
                                        })}
                                    </Animatable.View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SharedElement>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 18,
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - SPACING * 3,
        right: SPACING
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8+10,
        left: SPACING
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT }],
        borderRadius: 32,
        padding: SPACING,
        paddingTop: 32 + SPACING,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: SPACING,
    },
    subTitle: {
        fontSize: 14,
        opacity: 0.8,
    }
})
SalonListDetails.sharedElements=(route,otherRoute,showing)=>{
    const {item}=route.params

    return[
        {
            id:`item.${item.key}.bg`,
        },
        {
            id:`item.${item.key}.name`,
        },
        {
            id:`item.${item.key}.image`,
        },
        {
            id:'general.bg',
        },
    ]
}
export default SalonListDetails