module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/"
    ],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90
        }
    }

}