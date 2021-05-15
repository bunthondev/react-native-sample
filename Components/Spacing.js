import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacing = () => {
  return <View style={styles.spacing} />;
};

const styles = StyleSheet.create({
  spacing: {
    height: 10,
    width: '100%'
  }
});

export { Spacing };
export default Spacing;
