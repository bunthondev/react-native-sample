import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

const ContactItem = ({ number, date, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(number, date)}>
      <View style={styles.itemLeftContainer}>
        <Image
          style={styles.avatar}
          source={require('../Assets/user-solid-circle.png')}
        />
        <View style={styles.contactInfo}>
          <Text>{number || '123456'}</Text>
          <Text>{date || 'Yesterday'}</Text>
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
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 5
      },
      android: {
        elevation: 4
      }
    })
  }
});

export default ContactItem;
