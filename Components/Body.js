import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Yesterday</Text>
        </View>
        <ContactItem />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Older</Text>
        </View>
        <ContactItem />
        <View style={styles.spacing} />
        <ContactItem />
        <View style={styles.spacing} />
        <ContactItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
    height: '100%'
  },
  itemLeftContainer: {
    flexDirection: 'row'
  },
  contactInfo: {
    paddingLeft: 10
  },
  labelContainer: {
    paddingVertical: 15
  },
  avatar: {
    width: 35,
    height: 35
  },
  spacing: {
    height: 10,
    width: '100%'
  },
  phone: {
    width: 20,
    height: 20
  },
  itemContainer: {
    backgroundColor: '#FFF',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  label: {
    color: '#6E6E6E',
    fontWeight: 'bold'
  }
});
export default Body;
