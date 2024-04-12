import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/start/StartScreen';
import Splash from './screens/Splash';
import { Appearance } from 'react-native';
import GetStarted from './screens/getstarted';
import SetLocation from './screens/SetLocation/SetLocation';
import MainApp from './screens/app/MainApp';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [splashShown, setSplashShown] = React.useState(true);
  // set default theme to light
  React.useEffect(() => {
    Appearance.setColorScheme('light');
    setTimeout(() => {
      setSplashShown(false);
    }, 2000);
  }, []);
  return splashShown ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
