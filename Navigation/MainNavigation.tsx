import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabTwoScreen from '../screens/Chat/TabTwoScreen';
import Colors from '../constants/Colors';
import CallsScreen from '../screens/Chat/CallsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {}

const MainNavigation = (props: Props) => {
  const Tab = createMaterialTopTabNavigator();
  let colorScheme = Colors.dark;

  return (
    <Tab.Navigator
      transitionStyle={'curl'}
      screenOptions={{
        swipeEnabled: true,
        tabBarActiveTintColor: colorScheme.Scroll,
        tabBarInactiveTintColor: colorScheme.text,
        tabBarLabelStyle: {fontSize: 14, fontWeight: '700'},
        tabBarStyle: {
          backgroundColor: colorScheme.Header,
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: colorScheme.Scroll,
        },
      }}>

      <Tab.Screen name="Status" component={TabTwoScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
