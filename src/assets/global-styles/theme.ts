const lightTheme = {
    maxWidth: '1600px',
    primaryColor: '#FFF',
    secondaryColor: '#01b9ff',
    thirdColor: '#ececec',
    primaryTextColor: '#525252',
    secondaryTextColor: '#4f46b9',
    purple: '#8b48b7',
    babyBlueSoft: '#f1fbfe',
    yellowSoft: '#ffeba4',
    dullGray: '#ebe8e863'
}

export { lightTheme }

export interface ThemeProps {
    theme: {
        maxWidth: string, 
        primaryColor: string,
        secondaryColor: string,
        thirdColor: string,
        primaryTextColor: string,
        secondaryTextColor: string,
        purple: string,
        babyBlueSoft: string,
        yellowSoft: string,
        dullGray: string
    }
}