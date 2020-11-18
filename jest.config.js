module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/__mocks__/module.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/file.js',
  },
  testRegex: "/__tests__/",
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'test-coverage',
  coverageThreshold: { // TODO: threshold must be 80 for all
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ["node_modules", "src"]
};
