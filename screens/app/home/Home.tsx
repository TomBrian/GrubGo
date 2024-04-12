import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '../../../styles/layout'
import SearchBar from './components/SearchBar'
import CategoryPill from './components/CategoryPill'
import { SVGElements } from '../../../components/SVGElements'
import { COLORS } from '../../../styles/colors'
import { Typography } from '../../../styles/typography'
import RestaurantCard from './components/RestaurantCard'
import { ImageAssets } from '../../../components/ImageAssets'
import OfferCard from './components/OfferCard'

export default function Home() {
    return (
        <ScrollView style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
            <View style={{
                width: "100%",
                paddingHorizontal: 32
            }}>
                <SearchBar />
            </View>
            {/* categories */}
            <ScrollView
                horizontal
                style={{
                    width: "100%",
                    marginTop: 24,
                    maxHeight: 55
                }}>
                <View style={{
                    paddingLeft: 32,
                    flexDirection: 'row',

                }}>
                    <CategoryPill category="Pizza" icon={<SVGElements.Pizza color="black" />} />
                    <CategoryPill category="Drinks" icon={<SVGElements.Drinks color="black" />} />
                    <CategoryPill category="Fast Food" icon={<SVGElements.Fries color="black" />} />
                    <CategoryPill category="Coffee" icon={<SVGElements.Coffee color="black" />} />
                </View>
            </ScrollView>
            <View style={{
                width: "100%",
                marginTop: 48,
                paddingHorizontal: 32
            }}>
                <Typography.H4 style={{ textTransform: "uppercase" }}>
                    Popular restaurants near you
                </Typography.H4>
            </View>
            <View style={{ width: "100%" }}>
                <ScrollView horizontal style={{
                    marginTop: 24,
                    paddingBottom: 32
                }}>
                    <View style={{
                        flexDirection: "row",
                        paddingLeft: 32,
                        width: "100%"
                    }} >
                        <RestaurantCard
                            image={ImageAssets.Image1}
                            name="Kamau's Kikuyu Kitchen"
                            distance={"30 - 50mins"}
                            deliveryFee='$5'
                        />
                        <RestaurantCard
                            image={ImageAssets.Image2}
                            name="Spice Fusion Bistro"
                            distance={"20 - 40mins"}
                            deliveryFee='$2.50'
                        />
                        <RestaurantCard
                            image={ImageAssets.Image3}
                            name="Savory Haven Cafe"
                            distance={"20 - 40mins"}
                            deliveryFee='$1.50'
                        />
                    </View>

                </ScrollView>
                <View style={{ paddingHorizontal: 32 }}>
                    <Typography.H4 style={{
                        marginTop: 32,
                        textTransform: "uppercase"
                    }}>🏷️ Discover Top Offers !</Typography.H4>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        paddingHorizontal: 32,
                    }}
                >
                    <OfferCard
                        offer={{
                            title: "🚚 Enjoy FREE Delivery 🚚",
                            description: "Indulge in the exquisite flavors of authentic Chinese cuisine from the comfort of your home!",
                            image: ImageAssets.Image4
                        }}
                    />
                    <OfferCard
                        offer={{
                            title: "🏷️ 30% off on purchases above $10  ",
                            description: "Experience the heart and soul of Italy with our exquisite range of pasta, pizza, and more! From classic Margherita pizzas.",
                            image: ImageAssets.Image5
                        }}
                    />
                </View>
            </View>

        </ScrollView>
    )
}