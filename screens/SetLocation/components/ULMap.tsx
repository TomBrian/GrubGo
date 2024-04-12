import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native';

export default function ULMap() {
    const mapRef = React.useRef(null);
    const [userLocation, setUserLocation] = React.useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    });

    const handleGetUserLocation = () => {

        Geolocation.getCurrentPosition(info => {
            setUserLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
            console.log(info);
        });
    }

    React.useEffect(() => {
        handleGetUserLocation();
    }, []);
    React.useEffect(() => {
        if (mapRef.current) {
            // @ts-ignore
            mapRef.current.animateToRegion({
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
        }
    }, [userLocation]);

    return (
        <View style={{ width: "100%" }}>
            <MapView
                ref={mapRef}
                zoomTapEnabled={true}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: userLocation.latitudeDelta,
                    longitudeDelta: userLocation.longitudeDelta,
                }}
                style={{
                    width: "100%",
                    height: 400
                }} >
                <Marker
                    coordinate={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude
                    }}
                    title="You are here"
                    description="This is your current location"
                />
            </MapView>
        </View>
    )
}