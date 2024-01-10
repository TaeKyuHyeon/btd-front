/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
    webpack: {
        alias: {
            '@/': path.resolve(__dirname, 'src/'),
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^@/(.*)$': '<rootDir>/src/$1',
            },
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.json',
            },
        },
    ],
};
