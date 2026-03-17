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
        name="unix"
        options={{
          title: 'Unix (AIX)',
          tabBarLabel: 'Unix',
        }}
      />
      <Tabs.Screen
        name="linux"
        options={{
          title: 'Linux',
          tabBarLabel: 'Linux',
        }}
      />
    </Tabs>
  );
}
