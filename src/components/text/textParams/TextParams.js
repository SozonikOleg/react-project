import { TextType } from '../Text';

export const getParams = (type, theme,color, weight) => {
    const params = {
        [TextType.CHIPS_WHITE]: {
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '14px',
            color: "white",
        },
        [TextType.CHIPS_BLACK]: {
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '14px',
            color: "black",
        },
        [TextType.TEXT_14_BLACK]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "black",
        },
        [TextType.TEXT_14_WHITE]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "white",
        },
        [TextType.TEXT_14_GRAY]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TEXT_14_RED]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TEXT_14_GREEN]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TEXT_20_MAP]: {
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '25px',
            color: "gray",
        },
        [TextType.PROBLEMS_BUTTON_TEXT]: {
            fontWeight: '700',
            fontSize: '40px',
            lineHeight: '40px',
            color: "gray",
        },
        [TextType.HELPER_TEXT_1]: {
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '24px',
            color:"gray",
        },
        [TextType.HELPER_TEXT_2]: {
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '16px',
            color: "gray",
        },
        [TextType.MENU_ITEM_TEXT_PRIMARY]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.MENU_ITEM_TEXT_ADDITIONAL]: {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '16px',
            color: "gray",
        },
        [TextType.TEXT_12_BLACK]: {
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '14px',
            color:"gray",
        },
        [TextType.TEXT_12_GRAY]: {
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '16px',
            color: "gray",
        },
        [TextType.TEXT_12_GREEN]: {
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '16px',
            color: "gray",
        },
        [TextType.TEXT_10_GRAY]: {
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '14px',
            color: "gray",
        },
        [TextType.TEXT_10_WHITE]: {
            fontWeight: '600',
            fontSize: '10px',
            lineHeight: '14px',
            color: "gray",
        },
        [TextType.TITLE_PRIMARY]: {
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_SECONDARY]: {
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_ADDITIONAL]: {
            fontWeight: '400',
            fontSize: '30px',
            lineHeight: '24px',
            color:"gray",
        },
        [TextType.SEMITITLE]: {
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '22px',
            color: "gray",
        },
        [TextType.TITLE_H1]: {
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_H1MOBILE]: {
            fontWeight: 'bold',
            fontSize: '28px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_H3]: {
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '22px',
            color: "gray",
        },
        [TextType.TITLE_H3MOBILE]: {
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '22px',
            color: "gray",
        },
        [TextType.TITLE_H4]: {
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_H4MOBILE]: {
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '24px',
            color: "gray",
        },
        [TextType.TITLE_H5]: {
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '16px',
            color: "gray",
        },
        [TextType.TITLE_H6BOLD]: {
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '150%',
            color: "gray",
        },
        [TextType.TITLE_H6MOBILE]: {
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '150%',
            color: "gray",
        },
    };
    const values = params[type] || {};
    const rewriteColorOption = color ? { color } : {};
    const rewriteWeightOption = weight ? { fontWeight: weight } : {};
    const result = { ...values, ...rewriteColorOption, ...rewriteWeightOption };
    return result;
};
