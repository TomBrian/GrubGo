import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './screens/start/StartScreen';
import Splash from './screens/Splash';
import {Appearance} from 'react-native';
import GetStarted from './screens/getstarted';

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
