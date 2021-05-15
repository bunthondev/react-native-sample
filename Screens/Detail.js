import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

const Detail = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Detail screen</Text>
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

export default Detail;
