import React from 'react';
import { Header } from 'react-native-elements';

const handleBackPress = () => {
  console.log('press back from function');
};

const HeaderComponent = () => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'History', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
};

export { HeaderComponent };
