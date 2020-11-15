import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const IntroScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
        <Text>IntroScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;
