// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

import AddOrdersScreen from './components/AddOrdersScreen';
import OrderScreen from './components/OrderScreen';
import OrderDetailScreen from './components/OrderDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
        name="AddOrdersScreen" 
        component={AddOrdersScreen} 
        options={{ title: 'Add Orders' }}
      />
      <Stack.Screen 
        name="OrderScreen" 
        component={OrderScreen} 
        options={{ title: 'Orders List' }}
      />
      <Stack.Screen 
       name="OrderDetailScreen" 
       component={OrderDetailScreen} 
       options={{ title: 'Order Detail' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}