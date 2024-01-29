import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

const App = () => {
  const [url, setUrl] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    checkIfPromptShown();
    loadUrlFromStorage();
  }, []);

  const checkIfPromptShown = async () => {
    try {
      const promptShown = await AsyncStorage.getItem('promptShown');
      if (!promptShown) {
        setModalVisible(true);
      }
    } catch (e) {
      console.error('Error checking if prompt has been shown:', e);
    }
  };

  const promptForUrl = (newUrl: string) => {
    if (newUrl) {
      setUrl(newUrl);
      saveUrlToStorage(newUrl);
      markPromptAsShown();
    }
    setModalVisible(false);
  };

  const saveUrlToStorage = async (newUrl: string) => {
    try {
      await AsyncStorage.setItem('savedUrl', newUrl);
    } catch (e) {
      console.error('Error saving URL to AsyncStorage:', e);
    }
  };

  const loadUrlFromStorage = async () => {
    try {
      const savedUrl = await AsyncStorage.getItem('savedUrl');
      if (savedUrl) {
        setUrl(savedUrl);
      }
    } catch (e) {
      console.error('Error loading URL from AsyncStorage:', e);
    }
  };

  const markPromptAsShown = async () => {
    try {
      await AsyncStorage.setItem('promptShown', 'true');
    } catch (e) {
      console.error('Error marking prompt as shown:', e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: url }} />
        <Button title="Change URL" onPress={() => setModalVisible(true)} />
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          backdropOpacity={0.5}
        >
          <View style={styles.modalContainer}>
            <Text>Please enter the URL:</Text>
            <TextInput
              style={styles.input}
              placeholder="Please Enter App URL"
              onChangeText={(text) => setUrl(text)}
            />
            <Button title="Save URL" onPress={() => promptForUrl(url)} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default App;
