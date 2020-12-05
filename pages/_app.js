import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  black: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  },
  orange: {
    50: '#fff3da',
    100: '#ffdfae',
    200: '#ffca7d',
    300: '#ffb44b',
    400: '#ff9f1a',
    500: '#e68500',
    600: '#b36800',
    700: '#814a00',
    800: '#4f2b00',
    900: '#1f0d00',
  },
  white: "#ffffff"
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
