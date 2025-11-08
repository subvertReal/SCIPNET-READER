// @ts-nocheck
import {useState} from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, router } from 'expo-router';

import {fetchSCPExpo} from '@/scripts/wikiFetch';

// This variable can be accessed literally anywhere, probably easier then spending 100 hours trying to figure out how to use parameters in expo router to send information when I could just use this...
global.scpAPI001 = ''
global.scpAPI = ''
global.scpAPI2 = ''
global.scpAPI3 = ''

// Button for each scp series
const EachSCPSeries = ({name}) =>{
  return (
      <View >
        <Text style={styles.para}>Test</Text>

      </View>
  )

}

// The Main View
const seriesIndex = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Series 1"
        onPress={() => {
          // navigate to layoutSCP
          global.scpAPI001 = 'https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_scp-001.json'
          global.scpAPI = 'https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_series-1.json'
          global.scpAPI2 = 'https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_series-10.0.json'
          global.scpAPI3 = 'https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_series-10.5.json'
          router.push('/layoutSCP');
        }}
      />
      <EachSCPSeries name='a'></EachSCPSeries>
    </View>
  );
};
  export default seriesIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // example
  },
  title: {
    paddingTop: 40,
    padding: 10,
    color: 'white',
    fontSize: 20,
  },
  paragraph: {
    paddingTop: 40,
    padding: 10,
    color: 'white',
  },
  para:{
    color: 'white',
    fontSize: 20,
  }
});

