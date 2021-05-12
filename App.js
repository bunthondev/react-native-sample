import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import Body from './Components/Body';
import { Header } from './Components/Header';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

export default App;
