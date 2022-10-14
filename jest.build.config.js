const path = require('path');

module.exports = {
  rootDir: __dirname,
  testPathIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  projects: ['<rootDir>/libs/lib-a/jest.build.config.js'],
  moduleNameMapper: {
    '@test/lib-b': require.resolve(
      path.join(__dirname, '/dist/libs/lib-b/src')
    ),
  },
  testEnvironment: 'node',
};
