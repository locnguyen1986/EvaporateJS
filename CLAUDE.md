# EvaporateJS

JavaScript library for uploading files from a browser to AWS S3 using parallel S3's multipart uploads.

## Project Overview

- **Main file**: `evaporate.js` - Core library implementation
- **Tests**: Located in `test/` directory using mocha/chai
- **Examples**: `example/` directory contains various signing and usage examples

## Key Features

- Parallel multipart uploads with configurable concurrency
- MD5 checksum support for each part
- AWS Signature Version 2 and 4 support
- S3 Transfer Acceleration support
- Pause/resume/cancel upload operations
- Pluggable signing methods (including AWS Lambda)
- Memory-efficient MD5 digest calculations

## Development

- **Testing**: `npm test` runs the test suite
- **Linting**: ESLint configured (`.eslintrc`)
- **Language**: JavaScript (ES6+)

## Code Conventions

- Uses ESLint for code style (Airbnb-like rules)
- Mocha/Chai for testing with browser-env setup
- Tests use `should` assertions from chai
- Browser compatibility documented in wiki