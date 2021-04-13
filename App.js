import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Home';
import Header from './Header';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';
import NewsDetail from './NewsDetail';
import AboutGlobal from './About';
import QuotePage from './Quote';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName="GlobalTimes"
          headerMode="screen"
        >

          <Stack.Screen
            name="GlobalTimes"
            component={HomePage}
            options={{
              header: () => <Header headerDisplay='lobal Times' />
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay='News' />
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutGlobal}
            options={{
              header: () => <Header headerDisplay='About' />
            }}
          />
          <Stack.Screen
            name="Quote"
            component={QuotePage}
            options={{
              header: () => <Header headerDisplay='et a Quote' />
            }}
          />

        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
  }
}