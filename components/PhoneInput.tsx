import {View} from 'react-native';

import React from 'react';
import {default as PInput} from 'react-native-phone-number-input';

export default function PhoneInput({setPhoneNumber}: {setPhoneNumber: any}) {
  const [value, setValue] = React.useState('');
  const [formattedValue, setFormattedValue] = React.useState('');
  const phoneInput = React.useRef<any>(null);

  return (
    <View style={{width: '100%', alignItems: 'baseline'}}>
      <PInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="KE"
        layout="first"
        containerStyle={{
          height: 56,
          borderRadius: 8,
          overflow: 'hidden',
          marginVertical: 10,
          width: '100%',
          marginLeft: 0,
        }}
        textInputStyle={{fontSize: 14}}
        placeholder="Your Phone Number"
        textContainerStyle={{
          height: '100%',
          paddingVertical: 0,
          backgroundColor: '#efefef',
        }}
        flagButtonStyle={{
          height: '100%',
          backgroundColor: '#efefef',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onChangeText={(text: any) => {
          setValue(text);
        }}
        onChangeFormattedText={(text: any) => {
          setFormattedValue(text);
          setPhoneNumber(text);
        }}
        autoFocus
      />
    </View>
  );
}
