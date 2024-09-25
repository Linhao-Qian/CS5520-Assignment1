import { StyleSheet } from "react-native"

// the color set
export const colors = {
    darkBlue: '#2e0690',
    bluishViolet: '#33009f',
    lightBlue: '#426bf2',
    lightBlack: '#33332f',
    blue: '#0012ff',
    plum: '#b10050',
    grey: '#959295',
    babyBlue: '#77d1f7',
    transparentBabyBlue: '#77d1f7bf',
    slateBlue: '#747cb7',
    transparentSlateBlue: '#747cb7bf',
    black: '#000',
}

export const commonStyles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomColor: colors.bluishViolet,
        borderBottomWidth: 2,
        paddingBottom: 12,
        marginTop: 16,
        fontSize: 18,
        color: colors.bluishViolet,
        fontWeight: 'bold',
    },
})