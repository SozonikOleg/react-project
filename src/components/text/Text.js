import React from 'react';
// @ts-ignore
import styled, { useTheme } from 'styled-components';

import { getParams } from './textParams/TextParams';

export const TextType = {
    CHIPS_WHITE : 'CHIPS_WHITE',
        CHIPS_BLACK :'CHIPS_BLACK',
        TEXT_14_BLACK :'TEXT_14_BLACK',
        TEXT_14_WHITE : 'TEXT_14_WHITE',
        TEXT_14_GRAY : 'TEXT_14_GRAY',
        TEXT_14_RED : 'TEXT_14_RED',
        TEXT_14_GREEN : 'TEXT_14_GREEN',
        PROBLEMS_BUTTON_TEXT : 'PROBLEMS_BUTTON_TEXT',
        HELPER_TEXT_1 : 'HELPER_TEXT_1',
        HELPER_TEXT_2 : 'HELPER_TEXT_2',
        MENU_ITEM_TEXT_PRIMARY : 'MENU_ITEM_TEXT_PRIMARY',
        MENU_ITEM_TEXT_ADDITIONAL : 'MENU_ITEM_TEXT_ADDITIONAL',
        TEXT_12_BLACK : 'TEXT_12_BLACK',
        TEXT_12_GRAY : 'TEXT_12_GRAY',
        TEXT_12_GREEN : 'TEXT_12_GREEN',
        TEXT_10_GRAY :'TEXT_10_GRAY',
        TEXT_10_WHITE : 'TEXT_10_WHITE',
        TEXT_20_MAP : 'TEXT_20_MAP',
        TITLE_PRIMARY : 'TITLE_PRIMARY',
        TITLE_SECONDARY : 'TITLE_SECONDARY',
        TITLE_ADDITIONAL : 'TITLE_ADDITIONAL',
        SEMITITLE : 'SEMITITLE',
        TITLE_H1 : 'TITLE_H1',
        TITLE_H1MOBILE : 'TITLE_H1MOBILE',
        TITLE_H3 : 'TITLE_H3',
        TITLE_H3MOBILE : 'TITLE_H3MOBILE',
        TITLE_H4 : 'TITLE_H4',
        TITLE_H4MOBILE : 'TITLE_H4MOBILE',
        TITLE_H5 : 'TITLE_H5',
        TITLE_H6BOLD : 'TITLE_H6BOLD',
        TITLE_H6MOBILE :'TITLE_H6MOBILE'
}

const BaseSpan = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  transition: all 0.3s ease;
`;

const Chips = styled(BaseSpan)``;
const Text14 = styled(BaseSpan)``;
const ProblemsButtonText = styled(BaseSpan)`
`;

const HelperText = styled(BaseSpan)``;

const MenuItemText = styled(BaseSpan)`
  &:hover {
    color: ${(props) =>
    props.type === TextType.MENU_ITEM_TEXT_PRIMARY ? props.theme.colors.primary : props.theme.colors.gray1};
    font-weight: ${(props) => (props.type === TextType.MENU_ITEM_TEXT_ADDITIONAL ? '600' : '500')};
  }
`;

const Text12 = styled(BaseSpan)``;

const Text10 = styled(BaseSpan)`
  letter-spacing: 0.2px;
`;

const Title = styled(BaseSpan)`
  user-select: none;
`;

// @TODO Alex proper selected class for menu text



export const Text = ({ children, type, isHovered, color, margin, weight, ...props }) => {
    const theme = useTheme();
    const params = getParams(type, theme, color, weight);
    const values = { ...params, margin };
    const isChips = type === TextType.CHIPS_WHITE || type === TextType.CHIPS_BLACK;
    const isText14 =
        type === TextType.TEXT_14_BLACK ||
        type === TextType.TEXT_14_WHITE ||
        type === TextType.TEXT_14_GRAY ||
        type === TextType.TEXT_14_RED ||
        type === TextType.TEXT_14_GREEN;
    const isProblemsButton = type === TextType.PROBLEMS_BUTTON_TEXT;
    const isHelperText = type === TextType.HELPER_TEXT_1 || type === TextType.HELPER_TEXT_2;
    const isMenuItem = type === TextType.MENU_ITEM_TEXT_PRIMARY || type === TextType.MENU_ITEM_TEXT_ADDITIONAL;
    const isText12 = type === TextType.TEXT_12_BLACK || type === TextType.TEXT_12_GRAY || type === TextType.TEXT_12_GREEN;
    const isText10 = type === TextType.TEXT_10_GRAY || type === TextType.TEXT_10_WHITE;
    const isTitle =
        type === TextType.TITLE_PRIMARY ||
        type === TextType.TITLE_SECONDARY ||
        type === TextType.TITLE_ADDITIONAL ||
        type === TextType.TITLE_H1 ||
        type === TextType.TITLE_H1MOBILE ||
        type === TextType.TITLE_H3 ||
        type === TextType.TITLE_H3MOBILE ||
        type === TextType.TITLE_H4 ||
        type === TextType.TITLE_H4MOBILE ||
        type === TextType.TITLE_H5;
    const isNone =
        !isChips && !isText14 && !isProblemsButton && !isHelperText && !isMenuItem && !isText12 && !isText10 && !isTitle;

    return (
        <>
            {isChips && (
                <Chips {...values} {...props}>
                    {children}
                </Chips>
            )}
            {isText14 && (
                <Text14 {...values} {...props}>
                    {children}
                </Text14>
            )}
            {isProblemsButton && (
                <ProblemsButtonText {...values} {...props}>
                    {children}
                </ProblemsButtonText>
            )}
            {isHelperText && (
                <HelperText {...values} {...props}>
                    {children}
                </HelperText>
            )}
            {isMenuItem && (
                <MenuItemText {...values} theme={theme} isHovered={isHovered} type={type} {...props}>
                    {children}
                </MenuItemText>
            )}
            {isText12 && (
                <Text12 {...values} {...props}>
                    {children}
                </Text12>
            )}
            {isText10 && (
                <Text10 {...values} {...props}>
                    {children}
                </Text10>
            )}
            {isTitle && (
                <Title {...values} {...props}>
                    {children}
                </Title>
            )}
            {isNone && (
                <BaseSpan {...values} {...props}>
                    {children}
                </BaseSpan>
            )}
        </>
    );
};

Text.defaultProps = {};
