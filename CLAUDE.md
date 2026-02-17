# CLAUDE.md

This is an [EvaporateJS](https://github.com/TTLabs/EvaporateJS) project - a JavaScript library for uploading files from a browser to AWS S3 using parallel S3's multipart uploads with MD5 checksum support and control over pausing/resuming uploads.

## Project Overview

- **Main file**: `evaporate.js` - The core library implementing the S3 upload functionality
- **Tests**: Located in `test/` directory using [AVA](https://github.com/avajs/ava) test framework with browser environment simulation
- **Examples**: `example/` directory contains various usage examples including browser, Electron, and server-side signing examples

## Key Commands

```bash
# Install dependencies
npm install

# Run tests
npm test
```

**Note**: Tests use browser environment simulation via jsdom and require babel-register for ES6 support.

## Architecture & Coding Conventions

- The project uses JavaScript (ES5/ES6 mix) and follows a Promise-based API pattern
- AWS Signature Version 2 and 4 support via `awsSignatureVersion` config option
- Pluggable signing methods via `customAuthMethod` for AWS Lambda integration
- Parallel uploads with configurable concurrency via `maxConcurrentParts`
- MD5 checksum calculations with pluggable `cryptoMd5Method`
- Support for S3 Transfer Acceleration and file caching

## Environment Variables

None required for core functionality. Tests use browser environment simulation.

## Code Style

- ESLint configuration exists at `.eslintrc`
- Tests are written using AVA with jsdom browser environment simulation
- Babel transpilation for ES6 support in tests
- The library is designed to work both in browsers and Node.js environments (with fs support for Electron)