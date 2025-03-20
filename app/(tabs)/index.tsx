import React, { useState } from 'react';
import { View, Text, Button, Alert, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [showWebView, setShowWebView] = useState(false);

  const SBURL = 'https://m-sd.tngdigital.com.my/s/cashier/index.html?bizNo=20250320111212800110171802104189131&timestamp=1742460852450&merchantId=217120000000025910811&sign=kj4eG0Jgn90%252FjLjsFThgVmAYpULkGBHvf%252FyJgdDl8LhGVQr6BAd%252BQQmVoSewD%252F8ECDnsW2%252Fr%252BdSKQDT4Wk9lbnAHVhzcZBAdaIhExey%252F6Q%252B8d798MGcb9h%252FSZH7phzCB4N2nSk%252BAVC2x4DTnAZQKH4JlLO0Ngilde%252FoLEnv%252FdYqQCReMW6cvU%252FppLbYHJXq3ILa2vNR08TybHKwm1RQQCc9STJZB%252F02xdRbm1Tw0DTytLig4UXZt14dPWPV24P7zjO9Z1roE7%252Bnc1lBJ4Lg4FO3jNclN0eIXDOPb6U0a7K5X8b1AJXIu%252BOL%252Fmy11gvuV6o0IPkqd3JdGjo%252BiWGKHOQ%253D%253D&forceInstallVer2=true'
  const PRODURL = 'https://m.tngdigital.com.my/s/cashier/index.html?bizNo=20250320211212800110171811825156974×tamp=1742466240665&merchantId=217120000000070845696&sign=bRe%252Bdaj0IPDqu%252BEvFzDm8Tn%252BxjtGkPesbXT9ldX3t8t2H3Z79MGksyZZfxkqbpup0ypDa8gHktrw4xHx2Spj0KMWM9Un4HO1PTtTtnHFhgAS16JkU8nhFSNTXTTlyhHPnS7Bhju5jmBADNxoWvQoYohLEU5%252F4hcaVB8GU8DvXA4afbWMvIugJDHgJB6tFKizhv2HEpUyfFFqpqBJycZ5P281MYtvFVHLwde6wq6%252BzIKjGl0NMKTXEtBlKRqN%252FDryT57T5JGZ8FEmP%252BN1WaWJLrqxkOS7v6dk1WAvzaRPWhn854iVNA9WiAC%252BH2s%252FWUCXGwtpM2MtxWL3VimevhYrSQ%253D%253D&forceInstallVer2=true'
            
  // HTML content for WebView (with buttons inside)
  const webContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { 
        font-family: Arial, sans-serif; 
        text-align: center; 
        padding: 20px; margin: 0; 
      }
      .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #333;
          color: white;
          text-align: center;
          padding: 10px 20px 15px; /* Adjust top padding */
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
      .nav-bar button {
        position: absolute;
        left: 20px; /* Keep Back button on the left */
        background: none;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }
      .content {
        margin-top: 10px;
        padding: 20px;
      }
      button.main-btn {
        padding: 10px;
        font-size: 16px;
        margin: 10px;
        cursor: pointer;
      }
        table {
            width: 80%;
            margin: 10px auto;
            border-collapse: separate;
            border-spacing: 15px; /* Adds spacing between columns */
        }
        th, td {
            border: 1px solid #ddd;
            padding: 15px; /* Increases padding inside each cell */
            text-align: center;
        }
        th {
            background-color: #333;
            color: white;
        }
    </style>
  </head>
  <body>
    <div class="nav-bar">
      <button onclick="goBack()">Back</button>
      <span>WebView Navigation</span>
    </div>
    <div class="content">
      <h2>React Native WebView</h2>
    </div>
    <div>
      <h5>Sandbox</h5>
      <button class="main-btn" onclick="window.location.href=SBURL">WEB</button>
      <button class="main-btn" onclick="openExternalApp(SBURL)">APP</button>
      <button class="main-btn" onclick="window.open(SBURL, '_blank')">WAP</button>
    </div>
    <div>
      <h5>Production</h5>
        <button class="main-btn" onclick="window.location.href=PRODURL">WEB</button>
      <button class="main-btn" onclick="openExternalApp(PRODURL)">APP</button> 
      <button class="main-btn" onclick="window.open(PRODURL, '_blank')">WAP</button> 
    </div>
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Jump App</th>
                <th>Open Browser</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>WEB</td>
                <td class="checkmark">IOS</td>
                <td class="checkmark">ANDROID</td>
            </tr>
            <tr>
                <td>APP</td>
                <td class="checkmark">IOS, ANDROID</td>
                <td class="checkmark"></td>
            </tr>
            <tr>
                <td>WAP</td>
                <td class="checkmark">ANDROID</td>
                <td class="checkmark">IOS</td>
            </tr>
        </tbody>
    </table>
    <script>
      const SBURL = '${SBURL}';
      const PRODURL = '${PRODURL}';

      function goBack() {
          window.ReactNativeWebView.postMessage('goBack')
      }

      function openExternalApp(url) {
        window.ReactNativeWebView.postMessage(url);
      }

      function loadPage(url) {
        window.open(url, '_blank');
      }
    </script>
  </body>
  </html>
`;

  // Function to open external URL or deep link
  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => Alert.alert("Error", "Cannot open the app."));
  };

  const handleMessage = (event:any) => {
    const data = event.nativeEvent.data;
    if (data === 'goBack'){
      setShowWebView(false);
      return;
    }
    openURL(data);
  };

  return (
    <View style={{ flex: 1 }}>
      {!showWebView ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>React Native WebView Example</Text>
          <View style={{ marginBottom: 30 }}>
            <Button title="Open WebView" onPress={() => setShowWebView(true)} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Button title="Open SANDBOX APP" onPress={() => openURL(SBURL)} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Button title="Open PRODUCTION APP" onPress={() => openURL(PRODURL)} />
          </View>
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#333',paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Fix for Android
        }}>
        <WebView 
          originWhitelist={['*']}
          source={{ html: webContent }} 
          style={{ flex: 1 }}
          onMessage={(event:any) => {
            handleMessage(event);
          }}
        />
        </SafeAreaView>
      )}
    </View>
  );
};

export default App;
