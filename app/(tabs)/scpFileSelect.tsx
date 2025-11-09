// @ts-nocheck
import {useState} from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, router } from 'expo-router';

import {fetchSCPExpo} from '@/scripts/wikiFetch';

global.setSCPEntry = 'Scp number'
global.selectedSCP = ''


// Button for each scp series
const EachSCPSeries = ({name}) =>{
  return (
      <View >
      <Button
        title = {global.setSCPEntry}
        onPress={() => {
          // navigate to layoutSCP
          
          router.push('/layoutSCP');
        }}
      />
      </View>
  )

}

// The Main View
const scpFileSelect = () => {
  return (
    <View style={styles.container}>
      <Text>{global.seriesName}</Text>
      
      <EachSCPSeries name={global.setSCPEntry}></EachSCPSeries>
    </View>
  );
};
  export default scpFileSelect;

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

