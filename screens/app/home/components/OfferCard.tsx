import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Typography } from '../../../../styles/typography'

export interface Offer {
    title: string,
    description: string,
    image: any
}
export default function OfferCard({
    offer
}: {
    offer: Offer
}) {
    return (
        <ImageBackground
            source={offer.image}
            style={{
                marginVertical: 16,
                width: "100%",
                height: 200,
                marginRight: 16,
                overflow: 'hidden',
            }}
        >
            <View style={{
                padding: 32,
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100%",
            }}>
                <Typography.H4 style={{
                    marginTop: 8,
                    color: "white"
                }}>{offer.title}</Typography.H4>
                <Typography.P style={{
                    color: "white",
                    marginVertical: 16
                }}>{offer.description}</Typography.P>
                <Typography.H4 style={{
                    color: "white",
                    // underline
                    textDecorationLine: 'underline',
                }}>View Menu</Typography.H4>
            </View>

        </ImageBackground>
    )
}