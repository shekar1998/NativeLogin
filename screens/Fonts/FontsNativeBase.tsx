import {NativeBaseProvider, extendTheme} from 'native-base';

const themeNative = extendTheme({
  fontConfig: {
    Laila: {
      200: {
        normal: 'Laila-Light',
        italic: 'Laila-Light',
      },
      300: {
        normal: 'Laila-Medium',
        italic: 'Laila-Medium',
      },
      400: {
        normal: 'Laila-Regular',
        italic: 'Laila-Italic',
      },
      500: {
        normal: 'Laila-SemiBold',
      },
      600: {
        normal: 'Laila-Bold',
        italic: 'Laila-Bold',
      },
    },
    Nunito: {
      100: {
        normal: 'Nunito-ExtraLight',
        italic: 'Nunito-ExtraLightItalic',
      },
      200: {
        normal: 'Nunito-Light',
      },
      300: {
        normal: 'Nunito-Medium',
        italic: 'Nunito-MediumItalic',
      },
      400: {
        normal: 'Nunito-Regular',
        italic: 'Nunito-RegularItalic',
      },
      500: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
      600: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic',
      },
      700: {
        normal: 'Nunito-ExtraBold',
        italic: 'Nunito-ExtraBoldItalic',
      },
    },
    MochiyPopOne: {
      200: {
        normal: 'Dongle-Light',
      },
      300: {
        normal: 'Dongle-Regular',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'MochiyPopOne-Regular',
        italic: 'MochiyPopOne-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Dongle-Bold',
        italic: 'CevicheOne-Regular',
      },
    },
    BungeeShades: {
      500: {
        normal: 'BungeeShade-Regular',
      }
    },
    JuliusSansOne: {
      500: {
        normal: 'JuliusSansOne-Regular',
      }
    },
    TrainOne: {
      500: {
        normal: 'TrainOne-Regular',
      }
    },
    Monoton: {
      500: {
        normal: 'Monoton-Regular',
      }
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    Nunito: 'Nunito',
    Laila: 'Laila',
    Bungee:'BungeeShades',
    Julius:'JuliusSansOne',
    TrainOne:'TrainOne',
    Monoton:'Monoton'
  },
});

export default themeNative;
