import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  },
  avatar: {
    backgroundColor: 'gray'
  }
});
