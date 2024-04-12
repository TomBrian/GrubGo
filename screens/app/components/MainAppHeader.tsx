import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from '../../../styles/typography'
import AsyncStorage from '@react-native-community/async-storage';
import { SVGElements } from '../../../components/SVGElements';
import { COLORS } from '../../../styles/colors';

export default function MainAppHeader() {
    const [address, setAddress] = React.useState("");
    const [mode, setMode] = React.useState<"pickup" | "delivery">("pickup");

    React.useEffect(() => {
        // get address from async storage
        AsyncStorage.getItem("address").then((value: any) => {
            if (!value) {
                setAddress("Set your delivery location");
                return;
            }
            setAddress(value);
        });
    }, []);
    return (
        <View style={{ width: "100%", backgroundColor: "white", paddingVertical: 16, paddingHorizontal: 24 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Typography.P style={{ fontWeight: 'bold' }}>
                        {
                            address.length > 15 ? `${address.substring(0, 15)}...` : address
                        }
                    </Typography.P>
                    <Typography.P style={{ color: "grey", marginLeft: 8 }}>▼</Typography.P>
                </View>
                <View style={{ backgroundColor: "#efefef", flexDirection: "row", overflow: "hidden", borderRadius: 32 }}>
                    <TouchableOpacity onPress={() => setMode("pickup")} style={{ padding: 8, borderRadius: 24, backgroundColor: mode === "pickup" ? COLORS.PRIMARY : "transparent" }}>
                        <SVGElements.Pickup
                            color={mode === "pickup" ? "white" : COLORS.DARK}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setMode("delivery")} style={{ padding: 8, borderRadius: 24, justifyContent: "center", alignItems: "center", backgroundColor: mode === "delivery" ? COLORS.PRIMARY : "transparent" }}>
                        <SVGElements.Delivery
                            color={mode === "delivery" ? "white" : COLORS.DARK}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}