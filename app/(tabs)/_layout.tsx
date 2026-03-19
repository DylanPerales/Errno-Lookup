import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#39FF14',
        },
        tabBarActiveTintColor: '#39FF14',
        tabBarInactiveTintColor: '#004400',
      }}>
      <Tabs.Screen
        name="linux"
        options={{
          title: 'Linux',
          tabBarLabel: 'Linux',
          tabBarIcon: ({ color }) => <FontAwesome5 name="linux" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="unix"
        options={{
          title: 'Unix (AIX)',
          tabBarLabel: 'Unix',
          tabBarIcon: ({ color }) => <FontAwesome5 name="server" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
