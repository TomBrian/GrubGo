import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Typography } from '../../../../styles/typography'

export default function RestaurantCard({
    name,
    image,
    deliveryFee,
    distance,
}: {
    name: string,
    image: any,
    deliveryFee: string,
    distance: string
}) {
    return (
        <View style={{
            width: 240,
            marginRight: 16,
            overflow: 'hidden',
        }}>
            <ImageBackground
                source={image}
                style={{
                    width: "100%",
                    height: 120,
                    overflow: 'hidden'
                }}
            />
            <Typography.H4 style={{
                marginTop: 8
            }}>{name}</Typography.H4>
            <Typography.P style={{
                color: "grey",
                marginTop: 8
            }}>{distance}</Typography.P>
            <Typography.P style={{
                color: "grey",
                marginTop: 8
            }}>{deliveryFee} delivery fee</Typography.P>
        </View>
    )
}