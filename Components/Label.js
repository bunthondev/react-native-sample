import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label = props => {
  const { title } = props;
  // title from props.title
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    paddingVertical: 15
  },
  label: {
    color: '#6E6E6E',
    fontWeight: 'bold'
  }
});

export { Label };
export default Label;
