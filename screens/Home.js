import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import {Animated } from 'react-native';



const av = new Animated.Value(0);
av.addListener(() => {return});

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "University of Ghana",
        gps: {
            latitude: 5.6609,
            longitude: -.1665
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Carpenter",
            icon: icons.carpenter_icon,
        },
        {
            id: 2,
            name: "Mason",
            icon: icons.mason_icon,
        },
        {
            id: 3,
            name: "Painter",
            icon: icons.painter_icon,
        },
        {
            id: 4,
            name: "Electrician",
            icon: icons.electrician_icon,
        },
        {
            id: 5,
            name: "Plumber",
            icon: icons.plumber_icon,
        },
        {
            id: 6,
            name: "Auto-mechanic",
            icon: icons.mechanic_icon,
        },
       
       
       

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Michael Halm",
            rating: 4.8,
            categories: [2],
            photo: images.mason_front,
            duration: "Mason",
            location: {
                latitude: 5.57184,
                longitude: -0.33463,
            },
            courier: {
                avatar: icons.user,
                name: "Weija"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Rate per hour",
                    photo: images.mason_back,
                    description: "Plastering    Wall-laying",
                    calories: 200,
                    price: 10
                },
               
               
            ]
        },
        {
            id: 2,
            name: "Roselyn Mawuena",
            rating: 4.8,
            categories: [1],
            priceRating: expensive,
            photo: images.carpenter_front,
            duration: "Carpenter",
            location: {
                latitude: 5.673127,
                longitude: -0.166385,
            },
            courier: {
                avatar: icons.user,
                name: "Madina"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Rate per hour",
                    photo: images.carpenter_back,
                    description: "Furniture Assembly    Roofing",
                    calories: 250,
                    price: 15
                },
                
               
               
            ]
        },
        {
            id: 3,
            name: "Kwabena Owusu",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.painter_front,
            duration: "Painter",
            location: {
                latitude: 5.5747,
                longitude: -.2643,
            },
            courier: {
                avatar: icons.user,
                name: "Odorkor"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Rate per hour",
                    photo: images.painter_back,
                    description: "Interior decor   Exterior decor",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Christian Mawuko",
            rating: 4.8,
            categories: [6],
            priceRating: expensive,
            photo: images.mechanic_front,
            duration: "Auto-mechanic",
            location: {
                latitude:  5.5333,
                longitude:  -.4167,
            },
            courier: {
                avatar: icons.user,
                name: "Kasoa"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Rate per hour",
                    photo: images.mechanic_back,
                    description: "Spraying     Engine works",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Clarissa Esinam",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.plumber_front,
            duration: "Plumber",
            location: {
                latitude: 5.7081,
                longitude: -.1601,
            },
            courier: {
                avatar: icons.user,
                name: "Adenta"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Rate per hour",
                    photo: images.plumber_back,
                    description: "Whole-house piping     W/C installation",
                    calories: 200,
                    price: 5
                },
                
                
                

            ]
        },
        {

            id: 6,
            name: "Eric Jiejorm",
            rating: 4.9,
            categories: [4],
            photo: images.electrician_front,
            duration: "Electrician",
            location: {
                latitude: 5.6656,
                longitude: -.0201,
            },
            courier: {
                avatar: icons.user,
                name: "Tema"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Rate per hour",
                    photo: images.electrician_back,
                    description: "Whole-house wiring     Appliance repairs",
                    calories: 100,
                    price: 2
                },
                
               
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 20,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>I-MADE TRADES</Text>
                    </View>
                </View>

                
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h4 }}>Book your preferred service</Text>
               

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                   
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home