import {View, Text} from 'react-native';
import React from 'react';
import SplitOTPField from './components/SplitOTPField';

export default function GetStarted() {
  return (
    <View>
      <Text>GetStarted</Text>
      <SplitOTPField length={6} />
    </View>
  );
}
