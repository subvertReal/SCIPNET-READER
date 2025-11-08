// @ts-nocheck
import {useState} from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import {a} from '@/scripts/fetchTest';

export default function HomeScreen() {

  const [getSCP, setSCP] = useState({});
  async function fetching(){
    let val = await a();
    // console.log(val);
    setSCP(val);

  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={style.paragraph}>Click This Button 🎉</Text>
      <Button
            onPress={()=> {fetching();
            }}

            title="Fetch"
            />
            <ScrollView>
            <View>
              
              <Text style={style.paragraph}> {getSCP.plainText}</Text>


            </View>
            </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
    paragraph:{
    paddingTop:'40',
    padding:'10',
    color:'white'
    }
})

