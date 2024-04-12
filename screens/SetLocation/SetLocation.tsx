import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Typography } from '../../styles/typography';
import { COLORS } from '../../styles/colors';
import ULMap from './components/ULMap';
import Geolocation from '@react-native-community/geolocation';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const GOOGLE_MAPS_API_KEY = "AIzaSyA5BDvZJFmSirhpSA5V7gXXsYgWBuAyo1M"

export default function SetLocation({ navigation }: any) {
    const [locationGranted, setLocationGranted] = React.useState(false);
    const [userLocation, setUserLocation] = React.useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    });
    const [AddressName, setAddressName] = React.useState("");
    React.useEffect(() => {
        // Check if location permission is granted
        Geolocation.requestAuthorization();
        // If not, ask for permission
        Geolocation.getCurrentPosition(info => {
            setUserLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
            setLocationGranted(true);
        });
        // If permission is granted, set locationGranted to true
    }, []);
    const handleGetAddressName = () => {
        // use reverse geocoding to get location name
        try {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.latitude},${userLocation.longitude}&key=${GOOGLE_MAPS_API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    setAddressName(data.results[0].formatted_address);
                });
        } catch (err) {
            console.error(err);
            setAddressName(`${userLocation.latitude},${userLocation.longitude}`)
        }
    }
    React.useEffect(() => {
        // If locationGranted is true, get user's location
        handleGetAddressName();
    }, [locationGranted]);
    return (
        <ScrollView style={{ height: "100%", paddingTop: StatusBar.currentHeight, backgroundColor: "white" }}>
            <View style={{ backgroundColor: "white", alignItems: "center", paddingHorizontal: 32, paddingVertical: 32 }}>
                <Typography.H3 style={{ color: COLORS.DARK }}>Set your delivery location</Typography.H3>
            </View>
            <ULMap />
            {
                locationGranted ? (
                    <View style={{ backgroundColor: "white", alignItems: "center", flex: 1, justifyContent: "center", paddingHorizontal: 32, paddingVertical: 32 }}>
                        <Banner type='success'>
                            <Typography.P style={{ color: COLORS.DARK }}>Your location has been set to <Typography.P style={{ fontWeight: "bold" }}>{AddressName}</Typography.P></Typography.P>
                        </Banner>
                        <View style={{ width: "100%", marginTop: 16 }}>
                            <Typography.H3 style={{ color: COLORS.DARK, fontWeight: "bold" }}>Additional delivery instructions (optional)</Typography.H3>
                        </View>
                        <TextInput
                            label="e.g Leave the food at the door, call me when you arrive, etc."
                            style={{ width: "100%", marginTop: 24, borderRadius: 8, backgroundColor: "#efefef", borderBottomColor: "#efefef" }}
                            multiline
                            // change focus text color
                            selectionColor={COLORS.PRIMARY}
                            // change placeholder color
                            placeholderTextColor={COLORS.PRIMARY}
                            numberOfLines={4}
                            //remove underline
                            underlineColor="#efefef"
                            // change focus border color
                            outlineColor="#efefef"
                            // change label color
                            theme={{ colors: { primary: COLORS.PRIMARY } }}
                        />
                        <View style={{ width: "100%", marginTop: 32 }}>
                            <Button type='primary' text="Save Location" onPress={async () => {
                                navigation.navigate("MainApp");
                                // save address to local storage
                                await AsyncStorage.setItem("address", AddressName);
                            }} />
                        </View>
                    </View>
                ) :
                    <View style={{ backgroundColor: "white", alignItems: "center", flex: 1, justifyContent: "center", paddingHorizontal: 32, paddingVertical: 32 }}>
                        <Typography.H3 style={{ color: COLORS.DARK }}>Set your delivery location</Typography.H3>
                        <Text style={{ color: COLORS.DARK }}>Please allow location access to set your delivery location</Text>
                        <View style={{ width: "100%", marginTop: 32 }}>
                            <Button type='primary' text="Go To Settings" onPress={() => {
                                Geolocation.requestAuthorization();
                                Geolocation.getCurrentPosition(info => {
                                    setLocationGranted(true);
                                });
                            }} />
                        </View>
                    </View>
            }
        </ScrollView>
    )
}