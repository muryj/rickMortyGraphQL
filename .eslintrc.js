module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  plugins: ['react', 'react-native'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react-native/no-color-literals':'off',
    'react/destructuring-assignment': 'off',
    'comma-dangle': 'off',
    'react/prefer-stateless-function': 'off',
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "no-undef": 'off',
    "no-alert": 'off',
    "consistent-return": 'off'
  },
  globals: {
    fetch: false,
  },
};
