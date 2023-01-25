import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootNavigation from './RootNavigation';
import React from 'react';
import color from '../color/color';

const Tab = createBottomTabNavigator();
const bgcolor = color.light;

export default function BottomStackNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RootNavigation"
        component={RootNavigation}
        options={({navigation, route}: any) => {
          console.log('getFocusedRouteNameFromRoute(route)', route);
          return {
            headerTintColor: bgcolor.background,
            headerStyle: {backgroundColor: bgcolor.background},
            headerShadowVisible: false,
            tabBarVisible: route.name === 'RootNavigation' ? false : true,
          };
        }}
      />
    </Tab.Navigator>
  );
}
