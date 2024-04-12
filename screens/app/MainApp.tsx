import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home/Home';
import MainAppHeader from './components/MainAppHeader';
import { BottomTabBar } from './components/BottomTabBar';
import { SVGElements } from '../../components/SVGElements';
const Tab = createBottomTabNavigator();
export default function MainApp() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", paddingTop: StatusBar.currentHeight }}>
            <Tab.Navigator
                tabBar={(props) => <BottomTabBar {...props} />}
                //   custom header
                screenOptions={
                    {
                        header: () => <MainAppHeader />
                    }
                }
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Browse" component={Home} />
                <Tab.Screen name="Basket" component={Home} />
                <Tab.Screen name="Account" component={Home} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}