import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Container } from '../../styles/layout';
import { SVGElements } from '../../components/SVGElements';
import { Typography } from '../../styles/typography';
import { COLORS } from '../../styles/colors';
import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';
import TOSLink from '../../components/TOSLink';

export default function StartScreen({ navigation }: any) {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  return (
    <Container style={{ backgroundColor: '#fff', paddingTop: 64 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <SVGElements.Logo />
        <Typography.P style={{ marginTop: 16 }}>
          Deliciously Delivered
        </Typography.P>
        <View style={{ marginVertical: 24 }}>
          <Typography.H4>From Kitchen to Your Doorstep, </Typography.H4>
          <View style={{ width: '100%' }}>
            <Typography.H4 style={{ color: COLORS.PRIMARY }}>
              Instantly.
            </Typography.H4>
          </View>
        </View>
        <View>
          <Typography.P>
            Please enter your phone number to continue
          </Typography.P>
          <PhoneInput setPhoneNumber={setPhoneNumber} />
        </View>
        <View style={{ height: 24 }} />
        <Button
          type="primary"
          onPress={() =>
            navigation.navigate('GetStarted', {
              phoneNumber: '+234' + ' ' + '1234567890',
            })
          }
          text="Continue"
        />
        <Typography.P style={{ marginVertical: 32, textAlign: 'center' }}>
          Already have an account?{' '}
        </Typography.P>
        <TouchableOpacity
          onPress={() => console.log('Skip')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#efefef',

            padding: 16,
            borderRadius: 32,
          }}>
          <SVGElements.FacebookIcon />
          <Typography.P style={{ color: COLORS.DARK, marginLeft: 16 }}>
            Sign In With Facebook
          </Typography.P>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Skip')}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#efefef',
            padding: 16,
            marginTop: 16,
            borderRadius: 32,
          }}>
          <SVGElements.GoogleIcon />

          <Typography.P style={{ color: COLORS.DARK, marginLeft: 16 }}>
            {' '}
            Sign In With Google
          </Typography.P>
        </TouchableOpacity>
        <TOSLink />
      </ScrollView>
    </Container>
  );
}
