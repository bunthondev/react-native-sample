import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';
import Spacing from './Spacing';
import Label from './Label';
import { styles } from './Styles';

const data = [
  {
    number: '1111',
    date: 'Yesterday'
  },
  {
    number: '2222',
    date: 'Yesterday'
  },
  {
    number: '3333',
    date: 'Yesterday'
  },
  {
    number: '4444',
    date: 'Yesterday'
  }
];
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 0,
      numberPressed: null
    };
  }

  handleItemPress = (number, date) => {
    console.log('number', number);
    console.log('date', date);
    this.setState({
      numberPressed: number
    });
  };

  handleIncrement = () => {
    const { increment } = this.state;

    this.setState({
      increment: increment + 1
    });
  };

  render() {
    const { increment, numberPressed } = this.state;

    return (
      <View style={styles.container}>
        <Label title="Yesterday" />
        <ContactItem onPress={this.handleIncrement} />
        <Label title="Older" />
        {data.map(item => {
          return (
            <>
              <ContactItem
                number={item.number}
                date={item.date}
                onPress={this.handleItemPress}
              />
              <Spacing />
            </>
          );
        })}
        {numberPressed !== null && (
          <Text>You are pressing the phone number: {numberPressed}</Text>
        )}
      </View>
    );
  }
}

export default Body;
