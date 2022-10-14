module.exports = {
  rootDir: __dirname,
  testPathIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  projects: ['<rootDir>/libs/lib-a/jest.build.config.js'],
  testEnvironment: 'node',
};
