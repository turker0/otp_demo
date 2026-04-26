const preset = require('@react-native/jest-preset/jest-preset');

module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: [
    ...preset.setupFiles,
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleNameMapper: {
    ...preset.moduleNameMapper,
    '^react-native-keyboard-controller$':
      '<rootDir>/jest/mocks/keyboardController.js',
    '^react-native-vector-icons/.*$': '<rootDir>/jest/mocks/vectorIcons.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-reanimated|react-native-worklets|@react-navigation)/)',
  ],
};
