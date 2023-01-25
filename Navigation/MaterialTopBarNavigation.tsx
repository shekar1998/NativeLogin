import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Otp from '../screens/Auth/Otp';
import PhoneNumber from '../screens/Auth/PhoneNumber';
import React from 'react';
import Login from '../screens/Auth/Login';

const Tab = createMaterialTopTabNavigator();

function MaterialTopBarNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: 'powderblue' },
    }}
      initialRouteName="PhoneNumber">
      <Tab.Screen name="PhoneNumber" component={PhoneNumber} />
      <Tab.Screen name="Otp" component={Otp} />
    </Tab.Navigator>
  );
}

export default MaterialTopBarNavigation;
