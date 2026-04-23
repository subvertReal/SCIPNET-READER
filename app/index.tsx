import { Text, View, useWindowDimensions } from "react-native";
import { sendItem } from "../scripts/fetch.js";
import { WebView } from 'react-native-webview';
import { useEffect, useState } from "react";




export default function Index() {
  const { width } = useWindowDimensions();


  const [html, setHtml] = useState(
    "<span>Loading SCP data...</span>"
  );
  async function retrieve() {
    try {
      const item = await sendItem();
      return setHtml(item);
    } catch (err) {
      console.error("error:", err);
      return "<span>Failed to load data</span>";
    }
  }

    useEffect(() => {
    retrieve();
  }, []);
  return (
    <View style={{ flex: 1 }}>


      <WebView
      contentWidth={width}
        originWhitelist={["*"]}
        source={{ html: html }}
        style={{ flex: 1 }}
        
        
      />
    </View>
    
  );
}
