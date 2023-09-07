import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';



import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'

import Saved from './screens/Favorites';
import Orderbook from './screens/OrderBook';
import Account from './screens/Profile';
import Payments from './screens/Payment';
import SuccessScreen from './screens/success';
import GetStartedPage from './screens/GetStarted';
import LoginPage from './screens/Login';
import RegisterPage from './screens/Register';





const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'GetStartedPage'}
              >
                  <Stack.Screen name= "LoginPage" component={LoginPage}/>
                  <Stack.Screen name="HomeTabs" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                  <Stack.Screen name= "Favorites" component={Saved}/>
                  <Stack.Screen name= "OrderBook" component={Orderbook}/>
                  <Stack.Screen name= "Account"  component={Account}/>
                  <Stack.Screen name= "Payments" component={Payments}/>
                  <Stack.Screen name= "SuccessScreen" component={SuccessScreen}/>
                  <Stack.Screen name= "GetStartedPage" component={GetStartedPage}/>
                  <Stack.Screen name= "RegisterPage" component={RegisterPage}/>
              </Stack.Navigator>
          </NavigationContainer>
      )
    
}

export default App;