import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

const ContactItem = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemLeftContainer}>
        <Image
          style={styles.avatar}
          source={require('../Assets/user-solid-circle.png')}
        />
        <View style={styles.contactInfo}>
          <Text>0000</Text>
          <Text>Yesterday</Text>
        </View>
      </View>
      <Image style={styles.phone} source={require('../Assets/phone.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: { height: 2, width: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 5
      },
      android: {
        elevation: 4
      }
    })
    // shadowColor: 'rgba(0,0,0, .4)',
    // shadowOffset: { height: 1, width: 1 },
    // shadowOpacity: 1,
    // shadowRadius: 1
  }
});

export default ContactItem;
