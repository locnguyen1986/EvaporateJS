# INDEX

## Project Structure

```
/workspace/repo/
├── evaporate.js          # Main library file
├── package.json          # NPM package configuration
├── README.md             # Project documentation
├── CHANGELOG.md          # Version history
├── CLAUDE.md             # Claude AI instructions
├── test/                 # Test files
│   └── ...
├── example/              # Usage examples
│   ├── browser/
│   ├── electron/
│   └── server_side_signing/
└── awsv4_signing_example.js  # AWS Signature v4 signing example
```

## Key Files

- **evaporate.js** - Core library implementing S3 multipart upload with parallel uploads, MD5 checksum support, pause/resume functionality
- **package.json** - NPM package manifest with dependencies and scripts
- **test/** - Mocha test suite with browser environment simulation

## Documentation

- **README.md** - Main documentation with features, installation, and usage examples
- **CHANGELOG.md** - Release notes and version history

## Getting Started

```bash
# Install dependencies
npm install

# Run tests
npm test
```

## API Reference

See [README.md](README.md) for full API documentation:
- `Evaporate.create()` - Initialize the library
- `evaporate.add()` - Add a file to upload
- `evaporate.cancel()` - Cancel uploads
- `evaporate.pause()` - Pause uploads
- `evaporate.resume()` - Resume uploads