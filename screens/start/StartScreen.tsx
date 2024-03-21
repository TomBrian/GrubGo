import {StatusBar, View} from 'react-native';
import React from 'react';
import {Container} from '../../styles/layout';
import {SVGElements} from '../../components/SVGElements';
import {Typography} from '../../styles/typography';
import {COLORS} from '../../styles/colors';
import PhoneInput from '../../components/PhoneInput';

export default function StartScreen() {
  return (
    <Container style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{width: '100%', height: '100%'}}>
        <SVGElements.Logo />
        <Typography.P style={{marginTop: 16}}>
          Deliciously Delivered
        </Typography.P>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <Typography.H4>
            From Kitchen to Your Doorstep,{' '}
            <Typography.H4 style={{color: COLORS.PRIMARY}}>
              Instantly.
            </Typography.H4>
          </Typography.H4>
        </View>
        <View style={{marginTop: 16}}>
          <Typography.P>
            Please enter your phone number to continue
          </Typography.P>
          <PhoneInput />
        </View>
      </View>
    </Container>
  );
}
