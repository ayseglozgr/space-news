import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import spaceNews from './components/spaceNews';
import profile from './components/profile';
import settings from './components/settings';

import planetIcon from './Assets/planet.png';
import profileIcon from './Assets/user.png';
import settingIcon from './Assets/setting.png';
import stackNav from './components/stackNav';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Space News"
          component={stackNav}
          options={{
            tabBarIcon: () => <Image source={planetIcon} style={{ width: 25, height: 25, }} />
          }}
        />
        <Tab.Screen
          name="Profile"
          component={profile}
          options={{
            tabBarIcon: () => <Image source={profileIcon} style={{ width: 25, height: 25, }} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={settings}
          options={{
            tabBarIcon: () => <Image source={settingIcon} style={{ width: 25, height: 25, }} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App

