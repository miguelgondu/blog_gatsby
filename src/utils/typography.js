import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.baseFontSize = '20px' // was 20px.

const typography = new Typography({
    baseFontSize: "20px",
    baseLineHeight: 1.666,
    headerFontFamily: ['Noto Sans', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif'],
})

export const { scale, rhythm, options } = typography
export default typography
