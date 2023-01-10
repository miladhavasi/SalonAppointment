import React, { useRef,} from 'react';
import { Text, View, Image, StatusBar, Dimensions, ImageBackground, StyleSheet, Animated, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";
import { SharedElement } from 'react-navigation-shared-element';
import CategoryData from '../Data/CategoryData';
import colors from '../config/colors'
import { windowHeight, windowWidth } from '../config/size'
import CarouselB from '../Component/Carousel/CarouselB';


//const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
const ImageHeight = windowWidth / 16 * 9
const ImagePrimaryHeight = (windowWidth - 16 * 2) / 2
const ImagePrimaryWidth = (windowWidth - 16 * 2)

const ImageSecondaryHeight = windowWidth / 4 * 3
const ImageSecondaryWidth = windowWidth

const ImagePrimaryTop = (ImageSecondaryHeight - ImagePrimaryHeight - 30) / 2





let s;
const ArticleDetailScreen = ({ navigation, route }) => {



    const { article } = route.params;

    const ImageDelay = 500

    const imageRadiusAnim = useRef(new Animated.Value(20)).current;
    const imageHeightAnim = useRef(new Animated.Value(ImagePrimaryHeight)).current;
    const imageWidthAnim = useRef(new Animated.Value(ImagePrimaryWidth)).current;
    const imageTopAnim = useRef(new Animated.Value(ImagePrimaryTop)).current;
    const imageEffectOpacity = useRef(new Animated.Value(0)).current;
    const imageEffectOpacityAnim = imageEffectOpacity.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0]
    })
    const categoryTopAnim = useRef(new Animated.Value(ImagePrimaryHeight + ImagePrimaryTop - 70)).current;
    const categoryColor = useRef(new Animated.Value(0)).current;
    const categoryColorAnim = categoryColor.interpolate({
        inputRange: [0, 100],
        outputRange: ["white", "black"]
    })
    const titleTopAnim = useRef(new Animated.Value(ImagePrimaryHeight + ImagePrimaryTop - 40)).current; //-34
    const titleOpacityAnim = useRef(new Animated.Value(0)).current;
    const titleBackAnim = titleOpacityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(255,255,255,0.6)", "rgba(255,255,255,0)"]
    })
    const bgTopAnim = useRef(new Animated.Value(windowHeight)).current;
    const goBack = useRef(new Animated.Value(0)).current;
    const goBackAnim = goBack.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })
    const carouselShowAnim = useRef(new Animated.Value(0)).current;
    const indicatorTopAnim = useRef(new Animated.Value(ImageSecondaryHeight - 24)).current;
    const indicatorOpacity = useRef(new Animated.Value(0)).current;
    const indicatorOpacityAnim = indicatorOpacity.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })
    const likeIconTopAnim = useRef(new Animated.Value(ImageSecondaryHeight)).current;
    const likeCountTopAnim = useRef(new Animated.Value(ImageSecondaryHeight)).current;
    const likeCountNoAnim = useRef(new Animated.Value(0)).current;
    const authorImageTopAnim = useRef(new Animated.Value(ImageSecondaryHeight)).current;
    const authorNameTopAnim = useRef(new Animated.Value(ImageSecondaryHeight)).current;
    const articleDateTopAnim = useRef(new Animated.Value(ImageSecondaryHeight)).current;
    const imageRadius = () => {
        Animated.timing(imageRadiusAnim, {
            toValue: 0,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start();
    };
    const imageHeight = () => {
        Animated.timing(imageHeightAnim, {
            toValue: ImageSecondaryHeight,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start();
    };
    const imageWidth = () => {
        Animated.timing(imageWidthAnim, {
            toValue: ImageSecondaryWidth,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start();
    };
    const imageTop = () => {
        Animated.timing(imageTopAnim, {
            toValue: 0,
            duration: 1000,
            delay: ImageDelay,
        }).start();
    };
    const categoryTop = () => {
        Animated.timing(categoryTopAnim, {
            toValue: ImageSecondaryHeight - 70 - 24,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start();
    };
    const titleTop = () => {
        Animated.timing(titleTopAnim, {
            toValue: ImageSecondaryHeight - 40 - 24,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(titleTopAnim, {
                toValue: ImageSecondaryHeight + 32,
                duration: 1000,
                delay: ImageDelay,
                useNativeDriver: false,
            }).start()
            Animated.timing(titleOpacityAnim, {
                toValue: 100,
                duration: 1000,
                delay: ImageDelay + 200,
                useNativeDriver: false,
            }).start()
            Animated.timing(categoryTopAnim, {
                toValue: ImageSecondaryHeight + 2,
                duration: 1000,
                delay: ImageDelay + 300,
                useNativeDriver: false,
            }).start();
            Animated.timing(categoryColor, {
                toValue: 100,
                duration: 1000,
                delay: ImageDelay + 300,
                useNativeDriver: false,
            }).start();
            Animated.timing(indicatorTopAnim, {
                toValue: ImageSecondaryHeight,
                duration: 1000,
                delay: ImageDelay + 900,
                useNativeDriver: false,
            }).start();
            Animated.timing(indicatorOpacity, {
                toValue: 100,
                duration: 1000,
                delay: ImageDelay + 900,
                useNativeDriver: false,
            }).start();
            Animated.timing(imageEffectOpacity, {
                toValue: 100,
                duration: 1000,
                delay: ImageDelay + 300,
                useNativeDriver: false,
            }).start();
            Animated.timing(authorImageTopAnim, {
                toValue: ImageSecondaryHeight - 60,
                duration: 1000,
                delay: ImageDelay + 400,
                useNativeDriver: false,
            }).start();
            Animated.timing(authorNameTopAnim, {
                toValue: ImageSecondaryHeight - 64,
                duration: 1000,
                delay: ImageDelay + 800,
                useNativeDriver: false,
            }).start();
            Animated.timing(articleDateTopAnim, {
                toValue: ImageSecondaryHeight - 48,
                duration: 1000,
                delay: ImageDelay + 1200,
                useNativeDriver: false,
            }).start();
            Animated.timing(likeIconTopAnim, {
                toValue: ImageSecondaryHeight - 55,
                duration: 1000,
                delay: ImageDelay + 1600,
                useNativeDriver: false,
            }).start();
            Animated.timing(likeCountTopAnim, {
                toValue: ImageSecondaryHeight - 55,
                duration: 1000,
                delay: ImageDelay + 2000,
                useNativeDriver: false,
            }).start();
            Animated.timing(likeCountNoAnim, {
                toValue: 3541,
                duration: 1000,
                delay: ImageDelay + 2000,
                useNativeDriver: false,
            }).start();
            Animated.timing(goBack, {
                toValue: 100,
                duration: 1000,
                delay: ImageDelay + 300,
                useNativeDriver: false,
            }).start(() => {

                Animated.timing(imageHeightAnim, {
                    toValue: 0,
                    duration: 0,
                    delay: 0,
                    useNativeDriver: false,
                }).start();
                Animated.timing(carouselShowAnim, {
                    toValue: ImageSecondaryHeight,
                    duration: 0,
                    delay: 0,
                    useNativeDriver: false,
                }).start();
            });

        }


        );

    };

    const bgTop = () => {
        Animated.timing(bgTopAnim, {
            toValue: ImageSecondaryHeight - 24,
            duration: 1000,
            delay: ImageDelay,
            useNativeDriver: false,
        }).start();

    };

    imageRadius()
    imageHeight()
    imageWidth()
    imageTop()
    categoryTop()
    titleTop()
    bgTop()
    const scrollX = useRef(new Animated.Value(0)).current;

    return (

        //backgroundColor: 'khaki' 
        <View style={{ flex: 1, }}>
            <StatusBar hidden />

            <Animated.View style={{ zIndex: -2, position: 'absolute', alignSelf: 'center', marginTop: imageTopAnim, width: imageWidthAnim, height: imageHeightAnim, borderRadius: imageRadiusAnim, overflow: 'hidden' }}>
                <SharedElement id={`item.${article.id}.bg`} style={{ flex: 1 }}>
                    <ImageBackground source={article.image} style={[StyleSheet.absoluteFillObject, { resizeMode: 'contain' }]}>
                        <Animated.View style={[StyleSheet.absoluteFillObject, { opacity: imageEffectOpacityAnim }]}>
                            <LinearGradient colors={[colors.gradientblue30, colors.gradientred30]} style={[StyleSheet.absoluteFillObject,]}>
                                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: colors.black20, }]} />
                            </LinearGradient>
                        </Animated.View>

                    </ImageBackground>
                </SharedElement>
            </Animated.View>

            <Animated.View style={[{ position: 'absolute', zIndex: -2, height: carouselShowAnim }]}>
                <FlatList
                    data={article.images}
                    keyExtractor={(_, index) => index.toString()}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ], { useNativeDriver: false }
                    )}


                    renderItem={({ item }) => {

                        return (
                            <ImageBackground source={item.image} style={{ width: windowWidth, height: windowWidth / 4 * 3 }}>
                                <Animated.View style={{ zIndex: 2, position: 'absolute', width: ImageSecondaryWidth, height: ImageSecondaryHeight * .30, opacity: goBackAnim, marginTop: ImageSecondaryHeight * .70 }}>
                                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']} style={[StyleSheet.absoluteFillObject]}>

                                    </LinearGradient>
                                </Animated.View>
                            </ImageBackground>
                        );
                    }}
                />
            </Animated.View>

            <Animated.View style={[styles.indicatorContainer, { marginTop: indicatorTopAnim, opacity: indicatorOpacityAnim }]}>
                {article.images.map((_data, index) => {

                    const inputRange = [
                        windowWidth * ((article.images.length - index - 1) - 4),
                        windowWidth * ((article.images.length - index - 1) - 3),
                        windowWidth * ((article.images.length - index - 1) - 2),
                        windowWidth * ((article.images.length - index - 1) - 1),
                        windowWidth * (article.images.length - index - 1),
                        windowWidth * ((article.images.length - index - 1) + 1),
                        windowWidth * ((article.images.length - index - 1) + 2),
                        windowWidth * ((article.images.length - index - 1) + 3),
                        windowWidth * ((article.images.length - index - 1) + 4),
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
            </Animated.View>
            <Animated.View style={{ position: 'absolute', right: 28, opacity: goBackAnim, marginTop: likeIconTopAnim }}>
                <AntDesign name='hearto' size={20} style={{}} color={'white'}
                    onPress={() => { }}
                />
            </Animated.View>
            <Animated.Text style={{position:'absolute',right:60, opacity:goBackAnim, marginTop:likeCountTopAnim, color:'white'}}>
                3417
            </Animated.Text>

            <Animated.View style={{ position: 'absolute', left: 28, opacity: goBackAnim, marginTop: authorImageTopAnim, height: 25, width: 25, borderRadius: 20, overflow: 'hidden' }}>
                <ImageBackground source={article.authorImage} style={[StyleSheet.absoluteFillObject, { resizeMode: 'contain' }]}>

                </ImageBackground>
            </Animated.View>
            <Animated.Text style={{ position: 'absolute', left: 60, opacity: goBackAnim, marginTop: authorNameTopAnim, color: 'white', fontSize: 15 }}>
                {article.authorName}
            </Animated.Text>
            <Animated.Text style={{ position: 'absolute', left: 60, opacity: goBackAnim, marginTop: articleDateTopAnim, color: 'white', fontSize: 12 }}>
                6 روز پیش
            </Animated.Text>
            <Animated.View style={{ zIndex: 2, position: 'absolute', width: ImageSecondaryWidth, height: ImageSecondaryHeight * .25, opacity: goBackAnim }}>
                <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']} style={{ height: ImageSecondaryHeight * .25, width: ImageSecondaryWidth }}>
                    <AntDesign name='arrowright' size={20} style={{ padding: 12, position: 'absolute', top: 18, left: 18, zIndex: 2, }} color={'white'}
                        onPress={() => { navigation.goBack() }}
                    />
                </LinearGradient>
            </Animated.View>

            <Animated.View style={{ zIndex: 1, position: 'absolute', marginTop: categoryTopAnim, marginLeft: 28 + 16, }}>
                <SharedElement id={`item.${article.id}.category`}  >
                    <Animated.Text style={{ fontFamily: "Iran-Sans-Bold", fontSize: 16, color: categoryColorAnim, }}>{CategoryData.filter(x => x.id == article.category)[0].title}</Animated.Text>
                </SharedElement>
            </Animated.View>

            <Animated.View style={{ zIndex: 1, position: 'absolute', marginTop: titleTopAnim, marginLeft: 20 + 16 }}>
                <SharedElement id={`item.${article.id}.title`} >
                    <Animated.Text style={{ fontFamily: "Iran-Sans-Light", fontSize: 12, backgroundColor: titleBackAnim, borderRadius: 20, numberOfLines: 1, maxHeight: 30, padding: 4, paddingHorizontal: 8, }}>{article.title}</Animated.Text>
                </SharedElement>
            </Animated.View>

            <Animated.View style={[styles.bg, { zIndex: 0, marginTop: bgTopAnim }]}>
                <SharedElement id='general.bg'>
                    <TouchableOpacity >
                        <View  >

                        </View>
                    </TouchableOpacity>

                </SharedElement>
            </Animated.View>

        </View>
    )
}
const styles = StyleSheet.create({

    bg: {

        position: 'absolute',
        width: windowWidth,
        height: windowHeight - (windowWidth / 4 * 3) + 24,
        backgroundColor: '#d7d7d7',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        padding: 16,
        paddingTop: 24,
    },
    scrollContainer: {
        position: 'absolute',
        // alignItems: "center",
        // justifyContent: "center",
        // overflow: 'hidden',
    },
    card: {
        // flex: 1,
        // zIndex: -3,
        // overflow: "hidden",
        // alignItems: "center",
        // justifyContent: "flex-end"
    },
    normalDot: {
        zIndex: 2,
        borderRadius: 3,
        backgroundColor: "black",
        marginHorizontal: 3
    },
    indicatorContainer: {
        zIndex: 2,
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        position: 'absolute',
        //marginTop: ImageSecondaryHeight,
        alignSelf: 'center'
    }

})
ArticleDetailScreen.sharedElements = (route, otherRoute, showing) => {
    const { article } = route.params

    return [
        {
            id: `item.${article.id}.bg`,
        },
        {
            id: `item.${article.id}.category`,
        },
        {
            id: `item.${article.id}.title`,
        },
        {
            id: 'general.bg',
        },
    ]
}
export default ArticleDetailScreen