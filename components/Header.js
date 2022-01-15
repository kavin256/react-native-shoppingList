import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Header: () => Node = () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>Shopping List</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {height: 60, padding: 15, backgroundColor: 'darkslateblue'},
  text: {color: '#fff', fontSize: 23, textAlign: 'center'},
});

export default Header;
