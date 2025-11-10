// @ts-nocheck
import { useState } from 'react';
import { ScrollView, StyleSheet, Button, View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import Constants from 'expo-constants';

import { fetchSCPExpo } from '@/scripts/wikiFetch';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function LayoutSCP() {
  const { width } = useWindowDimensions();
  const [getSCP, setSCP] = useState({});
  const [html, setHtml] = useState('<span>Press Fetch to Load SCP Data</span>');

  async function fetching() {
    try {
      const receive = await fetchSCPExpo();
      const val = receive.payLoad;
      console.log(val);

  
      let htmlContent =
        val.html || `<p>${val || 'No HTML content available.'}</p>`;
      
        htmlContent = htmlContent
      .replace(/<\/?(html|head|body)>/g, '')
      .trim();

      setHtml(htmlContent);
    } catch (err) {
      console.error('Error fetching SCP:', err);
      setHtml('<p style="color:red;">Failed to fetch SCP data.</p>');
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.btn}>
      <Button title="Fetch SCP" onPress={fetching} />
</View>
      <ScrollView style={styles.container}>
        <RenderHTML contentWidth={width} source={{ html }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 100
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
  paragraph: {
    paddingTop: 40,
    padding: 10,
    color: 'white',
  },
});
