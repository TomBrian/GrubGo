import { View, Text } from 'react-native'
import React from 'react'

export default function Banner({
    type,
    children
}: {
    type: 'error' | 'success' | 'info' | 'warning',
    children: React.ReactNode
}) {
    return (
        <View style={{ width: "100%", backgroundColor: type === 'success' ? "#C0ECAF" : "#efefef", padding: 16, borderRadius: 8, borderWidth: 0.1, borderColor: "black" }}>
            {children}
        </View>
    )
}