module.exports = {
    preset: 'ts-jest',
    // testEnvironment: 'node',
    verbose: true,
    cacheDirectory: '.jest/cache',
    setupFiles : ["./tests/dependency.js"]
};