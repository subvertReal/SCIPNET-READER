// @ts-nocheck
import {useState} from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import {fetchSCPExpo} from '@/scripts/wikiFetch';
import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCP Items</Text>
      <Button
        title="Fetch"
        onPress={() => {
          // navigate to seriesIndex
          router.push('/seriesIndex');
        }}
      />
    </View>
  );
};
  export default HomeScreen;

// export default function HomeScreen() {
  
//   const [getSCP, setSCP] = useState({});
//   async function fetching(){
//     let val = await fetchSCPExpo();
//     // console.log(val);
//     setSCP(val);

//   }
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text style={style.paragraph}>Welcome to the home page Click This Button 🎉</Text>
      
//             <ScrollView>
//             <View>
              
//               <Text style={style.paragraph}> {getSCP.plainText}</Text>


//             </View>
//             </ScrollView>
//     </View>
//   );
// }

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
});

