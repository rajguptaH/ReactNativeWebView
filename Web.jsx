import { View } from 'react-native';
import React, { Component } from 'react';
import { WebView  } from 'react-native-webview';
 export default function Web()  {
  
    return (
      <View>
      <WebView
      
        source={{ uri: 'https://github.com' }}
      /></View>
    );
  
  
}
