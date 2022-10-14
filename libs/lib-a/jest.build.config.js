module.exports = {
  rootDir: __dirname,
  testPathIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironment: 'node',
  displayName: 'lib-a',
  roots: ['<rootDir>/../../dist/libs/lib-a'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/../../dist/libs/lib-a'],
};
