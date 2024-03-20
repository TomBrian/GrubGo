import React from 'react';
import {Container} from '../styles/layout';
import {COLORS} from '../styles/colors';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import FadeInUp from '../animations/FadeInUp';

export default function Splash() {
  return (
    <Container style={{backgroundColor: COLORS.PRIMARY}}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="light-content" />
      <Text
        style={{
          fontSize: 29,
          fontWeight: 'bold',
          fontFamily: 'Inter-ExtraBold',
        }}>
        Grub<Text style={{fontFamily: 'Inter-Regular'}}>Go</Text>
      </Text>
      <FadeInUp>
        <Text style={{fontSize: 14, fontFamily: 'Inter-Regular'}}>
          Deliciously delivered
        </Text>
      </FadeInUp>
    </Container>
  );
}

const Text = styled.Text`
  color: #fff;
`;
