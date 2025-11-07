// @ts-nocheck
import {useRef, useState} from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text, View, TextInput } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import {a} from '@/scripts/fetchTest';

export default function HomeScreen() {
  const textRef = useRef<Text>(null)
  const [getSCP, setSCP] = useState("aaaaaaaaaaaaaaaaa");
  async function fetching(){
    let val = a();
    setSCP(val);
    textRef.current?.focus();
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={style.paragraph}>Try editing me! 🎉</Text>
      <Button
            onPress={()=> {fetching();
            }}

            title="Fetch"
            />
            <View>
              
              <Text style={style.paragraph} ref={textRef}>aaaaaaaaaaaaaaaaaa{getSCP}</Text>


            </View>
    </View>
  );
}

const style = StyleSheet.create({
    paragraph:{
    color:'white'
    }
})

