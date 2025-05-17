import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
 const router = useRouter();
 return (
    <View>
        <Button title="Stack Navigation"
        onPress={() => router.push('/navigation/stack/index')}
        />
        <Button title="Tab Navigation"
        onPress={() => router.push('C:\Users\Tecnico\Desktop\Aplic\aplic\app\navigation\tabs\index.tsx')}
        />
        <Button title="Drawer Navigation"
        onPress={() => router.push('/navigation/drawer')}
        />
    </View>
 )
}