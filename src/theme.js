import { Platform } from "react-native"

const theme = {
    colors: {
        textPrimary: '#24292E',
        textSecondary: '#586069',
        primary: '#0366D6',
        white: '#FFF'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    AppBar: {
        primary: '#24292E',
        textPrimary: '#FFF',
        textSecondary: '#999'
    }
}

export default theme