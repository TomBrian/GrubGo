import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {default as PInput} from 'react-native-phone-number-input';

export default function PhoneInput() {
  const [value, setValue] = React.useState('');
  const [formattedValue, setFormattedValue] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const phoneInput = React.useRef<any>(null);

  return (
    <View style={{width: '100%'}}>
      {showMessage && (
        <View>
          <Text>Value : {value}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? 'true' : 'false'}</Text>
        </View>
      )}
      <PInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="KE"
        layout="first"
        onChangeText={(text: any) => {
          setValue(text);
        }}
        onChangeFormattedText={(text: any) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      <TouchableOpacity
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
        }}>
        <Text>Check</Text>
      </TouchableOpacity>
    </View>
  );
}
