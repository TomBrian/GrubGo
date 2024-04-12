import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home/Home';
import MainAppHeader from './components/MainAppHeader';
const Tab = createBottomTabNavigator();
export default function MainApp() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", paddingTop: StatusBar.currentHeight }}>
            <Tab.Navigator
                //   custom header
                screenOptions={
                    {
                        header: () => <MainAppHeader />
                    }
                }
            >
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}