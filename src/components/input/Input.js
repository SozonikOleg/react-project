/**
 * @description
 * This is component designed to input fields
 * all the functionalities cthings require for Input
 * Highly customisable.
 *
 */

import React, { FC, useState } from 'react';
// @ts-ignore
import styled, { useTheme } from 'styled-components';

import { Text, TextType } from '../text/Text';

const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px 0px 14px 0px;
`;

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : '315px')};
  height: 40px;

  position: relative;

  margin: 2px 0px 0px 0px;
`;

const InputElement = styled.input`
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  background-color: ${(props) => 'white'};

  color: ${(props) => 'black'};
  ::placeholder {
    color: ${(props) => 'black'};
  }

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  line-height: 24px;

  border: 1px solid
    ${(props) =>
    props.isFocused
        ? 'black'
        : props.isError
        ?'black'
        : "black"};
  border-radius: ${(props) => '15'};

  padding: 8px 36px 8px 38px;

  outline: none;
`;

const ImageWrapper = styled.div`
  height: 40px;

  display: flex;
  align-items: center;

  position: absolute;
  left: 10px;

  & > svg > path {
    stroke: ${(props) => "black"};
  }
`;

const AdditionalImage = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  cursor: pointer;
`;

export const Input = ({
  type,
name,
                                          placeholder,
                                          image,

                                          width,
                                          additionalImage,
                                          ...props
}) => {
    const theme = useTheme();
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e, handler) => {
        handler(e.target.value);
    };
    return (
        <ExtraWrapper {...props}>
            <Text type={TextType.TEXT_12_BLACK} color={"gray"} margin="0px 0px 2px 6px">
                {name}
            </Text>
            <Wrapper width={width}>
                {image ? (
                    <ImageWrapper color={"gray"} >
                        {image}
                    </ImageWrapper>
                ) : null}
                <InputElement
                    type={type}
                    placeholder={placeholder}
                    theme={theme}
                    color={"black"}
                    isFocused={isFocused}
                    isError={value.length > 4}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    onChange={(e) => {
                        handleChange(e, setValue);
                    }}
                />
                {additionalImage ? (
                    <AdditionalImage color={"gray"} >
                        {additionalImage}
                    </AdditionalImage>
                ) : null}
            </Wrapper>
        </ExtraWrapper>
    );
};
