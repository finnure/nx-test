// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { projects, ...base } = require('../../jest.build.config');

module.exports = {
  ...base,
  displayName: 'lib-a',
  roots: ['<rootDir>/dist/libs/lib-a'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/dist/libs/lib-a'],
};
