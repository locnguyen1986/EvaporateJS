# EvaporateJS Index

A JavaScript library for uploading files from a browser to AWS S3 using parallel S3's multipart uploads with MD5 checksum support and control over pausing/resuming uploads.

## Project Overview

- **Main Library**: [evaporate.js](evaporate.js) - Core library implementing S3 multipart upload functionality
- **Tests**: [test/](test/) directory using Mocha test framework
- **Examples**: [example/](example/) directory containing various usage examples

## Documentation

| File | Description |
|------|-------------|
| [README.md](README.md) | Project overview, API documentation, and usage examples |
| [CHANGELOG.md](CHANGELOG.md) | Version history and change log |
| CLAUDE.md | Claude AI instructions for the codebase |

## Directory Structure

```
/workspace/repo/
├── .eslintrc              # ESLint configuration
├── .travis.yml            # Travis CI configuration
├── bower.json             # Bower package configuration
├── package.json           # NPM package configuration
├── evaporate.js           # Main library file
├── example/               # Usage examples
│   ├── electron/          # Electron app example
│   ├── evaporate_example.html
│   ├── evaporate_example_awsv4_signature.html
│   ├── evaporate_example_lambda.html
│   └── signing_example.*  # Various signing implementations
└── test/                  # Test suite
    ├── fixtures/          # Test fixture files
    ├── helpers/           # Test helper utilities
    └── *.spec.js          # Test specifications
```

## Key Features

- AWS Signature Version 2 and 4 support via `awsSignatureVersion` config option
- Pluggable signing methods via `customAuthMethod` for AWS Lambda integration
- Parallel uploads with configurable concurrency via `maxConcurrentParts`
- MD5 checksum calculations with pluggable `cryptoMd5Method`
- Support for S3 Transfer Acceleration and file caching
- Pause/resume upload capability

## Getting Started

### Installation

```bash
npm install
```

### Running Tests

```bash
npm test
```

## Test Suite

The test suite includes:

| File | Purpose |
|------|---------|
| [test/auth.spec.js](test/auth.spec.js) | Authentication tests |
| [test/aws_config.spec.js](test/aws_config.spec.js) | AWS configuration tests |
| [test/cached-parts.spec.js](test/cached-parts.spec.js) | Cached parts handling |
| [test/cancel-abort.spec.js](test/cancel-abort.spec.js) | Cancel/abort operations |
| [test/common-case.spec.js](test/common-case.spec.js) | Common use cases |
| [test/evaporate.spec.js](test/evaporate.spec.js) | Main functionality tests |
| [test/pause-resume.spec.js](test/pause-resume.spec.js) | Pause/resume functionality |
| [test/s3-object-reuse.spec.js](test/s3-object-reuse.spec.js) | S3 object reuse |

## Examples

| File | Description |
|------|-------------|
| [example/evaporate_example.html](example/evaporate_example.html) | Basic usage example |
| [example/evaporate_example_awsv4_signature.html](example/evaporate_example_awsv4_signature.html) | AWS Signature V4 example |
| [example/evaporate_example_lambda.html](example/evaporate_example_lambda.html) | AWS Lambda signing example |
| [example/signing_example.js](example/signing_example.js) | JavaScript signing example |
| [example/electron/](example/electron/) | Electron app integration example |