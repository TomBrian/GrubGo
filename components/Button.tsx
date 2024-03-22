import React from 'react';
import {Typography} from '../styles/typography';
import styled from 'styled-components/native';
import {COLORS} from '../styles/colors';
import {TouchableOpacityProps} from 'react-native';

export default function Button({
  type,
  text,
}: {
  type: 'primary' | 'secondary';
  text: string;
}) {
  return (
    <ButtonWrapper type={type}>
      <Typography.P
        style={{
          color: type === 'primary' ? '#fff' : '#3C3C3C',
          fontFamily: 'Inter-Bold',
          textAlign: 'center',
        }}>
        {text}
      </Typography.P>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.type === 'primary' ? COLORS.PRIMARY : '#efefef'};
  padding: 16px;
  border-radius: 32px;
`;

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary';
  children: any;
}
