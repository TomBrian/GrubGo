import { View, Text } from 'react-native';
import React from 'react';
import SplitOTPField from './components/SplitOTPField';
import { Container } from '../../styles/layout';
import { SVGElements } from '../../components/SVGElements';
import { Typography } from '../../styles/typography';
import Button from '../../components/Button';
import TOSLink from '../../components/TOSLink';

export default function GetStarted({ navigation }: { navigation: any }) {
  return (
    <Container style={{ backgroundColor: "white", paddingTop: 64 }}>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ marginBottom: 24 }}>
          <SVGElements.Logo />
          <Typography.P style={{ marginTop: 16 }}>
            Deliciously Delivered
          </Typography.P>
        </View>
        <View style={{ marginBottom: 48 }}>
          <Typography.H4>
            Verify your phone number
          </Typography.H4>
        </View>
        <Typography.P style={{ marginBottom: 16 }}>
          Please enter the five digit code that was sent to your number
        </Typography.P>
        <View style={{ marginBottom: 48, paddingHorizontal: 32 }}>
          <SplitOTPField length={5} />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('SetLocation');
          }}
          type='primary'
          text='Continue'
        />

        <TOSLink />

      </View>

    </Container>
  );
}
