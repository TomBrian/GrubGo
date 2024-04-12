import { View, Text, Linking, Pressable } from 'react-native'
import React from 'react'
import { Typography } from '../styles/typography'

export default function TOSLink() {
    const handleOpenLink = () => {
        // Open the Terms of Service link
        Linking.openURL('https://www.example.com/terms-of-service')
    }
    return (
        <View style={{ marginTop: 32 }}>
            <Pressable onPress={handleOpenLink}>
                <Typography.P>Terms of Service</Typography.P>
            </Pressable>
        </View>
    )
}