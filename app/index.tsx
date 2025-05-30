import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
 const router = useRouter();
 return (
    <View>
        <Button title="Stack Navigation"
        onPress={() => router.push('/navigation/stack')}
        />
        <Button title="Tab Navigation"
        onPress={() => router.push('/navigation/tabs')}
        />
        <Button title="Drawer Navigation"
        onPress={() => router.push('/navigation/drawer')}
        />
    </View>
 )
}