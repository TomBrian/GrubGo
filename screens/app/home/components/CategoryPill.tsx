import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '../../../../styles/typography'

export default function CategoryPill({
    category,
    icon
}: {
    category: string,
    icon: React.ReactNode
}) {
    return (
        <TouchableOpacity style={{
            padding: 16,
            flexDirection: 'row',
            backgroundColor: "#efefef",
            alignItems: 'center',
            borderRadius: 50,
            marginRight: 8,
            height: 53
        }}>
            {icon}
            <Typography.P style={{ marginLeft: 8 }}>{category}</Typography.P>
        </TouchableOpacity>
    )
}