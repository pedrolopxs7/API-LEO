import React from "react";
import { useState } from 'react';
import {Text,View,TextInput,Button} from 'react-native';

export default function Form() {
    const [exibr, setExibir] = useState(false);

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    return (
        <View>
            <TextInput placeholder="texto 1" onChangeText={setText1}></TextInput>
            <TextInput placeholder="texto 2" onChangeText={setText2}></TextInput>
            <TextInput placeholder="texto 3" onChangeText={setText3}></TextInput>

            <Button title="Exibir" onPress={() =>
            (
                <View>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
                <Text>{text3}</Text>
                </View>
            )
        }/>
        </View>
    )
}