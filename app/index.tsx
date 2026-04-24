import { useEffect, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { WebView } from 'react-native-webview';
import { sendItem } from "../scripts/fetch.js";






export default function Index() {
  const [showWebView, setShowWebView] = useState(true);
  const { width } = useWindowDimensions();


  let [html, setHtml] = useState(
    "<span>Loading SCP data...</span>"
  );
  async function retrieve(link: string) {
    try {
      const item = await sendItem(link);

      return setHtml(item);
    } catch (err) {
      console.error("error:", err);
      return "<span>Failed to load data</span>";
    }
  }

    useEffect(() => {
    retrieve('https://raw.githubusercontent.com/subvertReal/scpWikiAPI/refs/heads/main/SCP-171.html');
  }, []);

  
return (
  <View style={{ flex: 1 }}>
    {showWebView ? (
      <WebView
        style={{ flex: 1 }}
        source={{ html:html }}
        contentWidth={width}
        onShouldStartLoadWithRequest={(navState) => {
          

          if (navState.url.includes("/SCP") || navState.url.includes("/scp")) {
            setShowWebView(false);
            console.log(navState.url);
            retrieve(navState.url)
            setShowWebView(false);
            
            
            return false; // stop navigation
          }

          return true;
        }}
      />
    ) : (
      // <View style={{ flex: 1 }}>
      //   <Text>
      //     TestAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      //   </Text>
      // </View>
      <WebView
        style={{ flex: 1 }}
        source={{ html:html }}
        contentWidth={width}
        onShouldStartLoadWithRequest={(navState) => {
          

          if (navState.url.includes("/SCP") || navState.url.includes("/scp")) {
            setShowWebView(false);
            console.log(navState.url);
            retrieve(navState.url)
            setHtml("<html><p>hi</p></html>");
            
            
            
            return false; // stop navigation
          }

          return true;
        }}
      />
    )}
  </View>
);
}
