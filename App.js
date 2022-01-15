import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

const App: () => Node = () => {
  return (
    <View style={style.container}>
      <Header />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, paddingTop: 60},
});

export default App;
