import React from 'react';
import { View, SafeAreaView, StyleSheet, Button } from 'react-native';

import Body from '../Components/Body';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Detail"
          onPress={() => navigation.navigate('detail', { number: '013243' })}
        />
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

export default Home;
