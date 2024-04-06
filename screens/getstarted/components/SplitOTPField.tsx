import React, {useState, useRef} from 'react';
import {TextInput, View} from 'react-native';

interface SplitOTPFieldProps {
  length: number;
}

const SplitOTPField: React.FC<SplitOTPFieldProps> = ({length}) => {
  const [otp, setOTP] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '' && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<TextInput>,
  ) => {
    console.log(event.nativeEvent.type);

    if (
      // @ts-ignore
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      otp[index] === ''
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={{width: 40, height: 40, borderWidth: 1, margin: 5}}
          maxLength={1}
          value={value}
          onChangeText={text => handleChange(index, text)}
          //   @ts-ignore
          onKeyPress={event => handleKeyDown(index, event)}
          ref={ref => {
            inputRefs.current[index] = ref as TextInput;
          }}
        />
      ))}
    </View>
  );
};

export default SplitOTPField;
