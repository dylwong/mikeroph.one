import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

// 2. Call `extendTheme` and pass your custom values

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('brand.600', 'brand.300')(props),
      }),
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Button: {
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const darkBg = transparentize(`${props.colorScheme}.200`, 0.12)(props.theme);
          const darkHoverBg = transparentize(`${props.colorScheme}.200`, 0.24)(props.theme);
          const darkActiveBg = transparentize(`${props.colorScheme}.200`, 0.36)(props.theme);
          return {
            color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
            bgColor: props.colorMode === 'light' ? `${props.colorScheme}.50` : darkBg,
            _hover: {
              bgColor: mode(`${props.colorScheme}.100`, darkHoverBg)(props),
            },
            _active: {
              bgColor: mode(`${props.colorScheme}.200`, darkActiveBg)(props),
            },
          };
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      '*': {
        bg: 'none',

        _selection: {
          color: props.colorMode === `dark` ? `black` : `white`,
          bg: props.colorMode === `dark` ? `brand.300` : `brand.600`,
        },
      },
    }),
  },
  colors: {
    brand: {
      primary: `#b5b7ed`,
      50: `#8487e1`,
      100: `#7477dd`,
      200: `#595dd4`,
      300: `#8ae1b1`,
      400: `#5155d2`,
      500: `#494dd0`,
      600: `#3c42cd`,
      700: `#474990`,
      800: `#2f3279`,
      900: `#292c6a`,
    },
  },
});

export default theme;
