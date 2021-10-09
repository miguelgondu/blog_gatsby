import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.baseFontSize = '20px' // was 20px.

const typography = new Typography(fairyGatesTheme)

export const { scale, rhythm, options } = typography
export default typography
