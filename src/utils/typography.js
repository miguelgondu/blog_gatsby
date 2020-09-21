import Typography from 'typography'
// import elkGlenTheme from 'typography-theme-elk-glen'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.baseFontSize = '15px' // was 20px.
// fairyGatesTheme.headerFontFamily = ['Slavo 27px']

const typography = new Typography(fairyGatesTheme)

export const { scale, rhythm, options } = typography
export default typography