module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@types': './src/types',
          '@utils': './src/utils',
          '@store': './src/store',
        },
      },
    ],
  ],
};
