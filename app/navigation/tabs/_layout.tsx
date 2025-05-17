import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Configuração',
                    tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
                }}
            />
        </Tabs>

    );
}