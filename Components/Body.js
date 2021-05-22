import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import ContactItem from './ContactItem';
import Label from './Label';
import { styles } from './Styles';

const data = [
  {
    number: '1111',
    date: 'Yesterday',
    name: 'MD'
  },
  {
    number: '2222',
    date: 'Yesterday',
    name: 'AB'
  },
  {
    number: '3333',
    date: 'Yesterday',
    name: 'TH'
  },
  {
    number: '4444',
    name: 'EB'
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
    const { numberPressed } = this.state;

    return (
      <View style={styles.container}>
        <Label title="Yesterday" />
        <ContactItem onPress={this.handleIncrement} />
        <Label title="Older" />
        {data.map((item, index) => {
          return (
            <ListItem key={index} bottomDivider>
              <Avatar
                rounded
                title={item.name}
                containerStyle={styles.avatar}
              />
              <ListItem.Content>
                <ListItem.Title>{item.number}</ListItem.Title>
                <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
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
