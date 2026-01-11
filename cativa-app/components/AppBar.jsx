import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppBar({ navigation, title }) {
  return (
    <Appbar.Header elevated>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      {title && <Appbar.Content title={title} />}
    </Appbar.Header>
  );
}
