import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    scaleRatio: 3.375,
    baseLineHeight: 1.3,
    googleFonts: [
        {
            name: 'Rubik',
            styles: [
                '400',
                '400i',
                '500i',
                '800'
            ]
        }
    ],
    headerFontFamily: ['Rubik', 'sans-serif'],
    headerColor: 'hsl(0, 13%, 9%)',
    bodyFontFamily: ['Rubik', 'sans-serif'],
    bodyColor: 'hsla(0, 13%, 9%, 0.8)',
    headerWeight: '800',
    bodyWeight: '400',
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        h4: {
            ...adjustFontSizeTo('1.2rem'),
            marginBottom: rhythm(384615385/1000000000)
        },
        strong: {
            color: options.headerColor,
        }
    })
})

export default typography