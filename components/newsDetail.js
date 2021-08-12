
import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


const newsDetail = ({ route, navigation }) => {
    const [url, setUrl] = useState('');
    useFocusEffect(
      React.useCallback(() => {
        console.log('test')
        console.log(route.params.url)
        setUrl(route.params.url)
  
        return () => {
  
        };
      }, [])
    );
  
  
    return (
      <View style={{
        flex: 1,
      }}>
        <WebView source={{ uri: url }} />
      </View>
    )
  }
  export default newsDetail;