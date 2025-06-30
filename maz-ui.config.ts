import { defineConfig } from '@mazui/cli'

export default defineConfig({
  outputCssFilePath: './assets/css/maz-ui-variables.css',
  theme: {
    colors: {
      primary: 'hsl(210, 100%, 56%)',
      secondary: '#d2afff',
      info: '#a7ccff',
      success: 'hsl(130, 51%, 65%)',
      warning: '#f0b100',
      danger: '#fb2c36',
      bgOverlay: 'hsl(0, 0%, 0% / 30%)',
      lightTheme: {
        textColor: 'hsl(0, 0%, 85%)',
        colorMuted: 'hsla(0, 0%, 0%, 0.54)',
        bgColor: 'hsl(0, 0%, 100%)',
      },
      darkTheme: {
        textColor: 'hsl(210, 8%, 14%)',
        colorMuted: 'hsla(0, 0%, 100%, 0.54)',
        bgColor: 'hsl(235, 16%, 15%)',
      },
    },
    borderColor: 'hsl(220deg 13.04% 90.98%)',
    borderWidth: '0.125rem',
    borderRadius: '0.5rem',
    fontFamily: `system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen,
    ubuntu, cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
})