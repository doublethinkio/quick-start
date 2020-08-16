// https://jestjs.io/docs/en/configuration
module.exports = {
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // https://stackoverflow.com/a/51174924/11791657
    'app/(.*)': '<rootDir>/app/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules', 'app/node_modules'],
  setupFiles: ['./internals/scripts/CheckBuildsExist.js'],
}
