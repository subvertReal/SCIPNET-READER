// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

import { router } from 'expo-router';

import { fetchSCPExpo, fetchSCPNumExpo } from '@/scripts/wikiFetch';

global.scpList = [];
global.setSCPEntry = 'SCP number';
global.selectedSCP = '';
global.selectedSCPKey = '';

const ViewWithRefs = () => {
  const ref = useRef(null);
  const [viewVal, getVal] = useState('');
  return <View ref={ref}></View>;
};


const SCPFileSelect = () => {
  const [scpNumbers, setSCPNumbers] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadSCPs() {
      try {
        const response = await fetchSCPNumExpo(global.scpAPI);

        // if fetch updates global.scpList
        if (isMounted && Array.isArray(global.scpList)) {
          setSCPNumbers(global.scpList);
        }

        // if returns the data
        else if (isMounted && Array.isArray(response)) {
          setSCPNumbers(response);
          global.scpList = response;
        }
      } catch (e) {
        console.error('fetchSCPNumExpo error:', e);
        if (isMounted) setSCPNumbers([]);
      }
    }

    loadSCPs();
    return () => {
      isMounted = false;
    };
  }, []);

  const formatSCP = (item) => {
    const s = String(item || '');
    const digits = s.match(/\d+/);
    const num = digits ? digits[0].padStart(3, '0') : s.padStart(3, '0');

    

    return `SCP-${num}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{global.seriesName || 'SCP Series'}</Text>

      <ScrollView style={{ width: '100%' }}>
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          {scpNumbers.length === 0 ? (
            <Text style={styles.para}>Loading SCP list...</Text>
          ) : (
            scpNumbers.map((item, idx) => {
              const label = formatSCP(item);
              return (
                <View key={label + idx} style={{ marginVertical: 4, width: '90%' }}>
                  <Button 
                    title={label}
                    onPress={() => {
                      global.selectedSCP = label;

                      // find the index of selected SCP in scpList
                      const pos = global.scpList.findIndex(item => {
                        const formatted = `SCP-${String(item).match(/\d+/)?.[0].padStart(3, '0')}`;
                        return formatted === global.selectedSCP;
                      });

                      global.selectedSCPKey = pos !== -1 ? pos : null;

                      console.log(
                        `Selected: ${global.selectedSCP}, Key: ${global.selectedSCPKey}`
                      );

                      router.push('/layoutSCP');
                    }}
                  />
                </View>
              );
            })
          )}
        </View>
      </ScrollView>


    </View>
  );
};

export default SCPFileSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    paddingTop: 40,
    padding: 10,
    color: 'white',
    fontSize: 20,
  },
  para: {
    color: 'white',
    fontSize: 20,
  },
});
