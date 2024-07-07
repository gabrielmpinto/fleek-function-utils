# ⚡️ Fleek Function Utilities

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-blue.svg)](https://conventionalcommits.org)

Utilities for debugging Fleek Functions and types for HTTP requests and responses.

# Installation

- **npm**

```bash
npm install fleek-function-utils
```

- **pnpm**

```bash
pnpm install fleek-function-utils
```

# Usage

Here's a basic example of a Fleek edge function, demonstrating how to configure and use the proxy package.

```typescript
import { createProxy, FleekRequest, FleekResponse } from '@fleek-platform/proxy';

// Define your routing rules
const proxy = createProxy({
  routes: {
    routes: {
      '/api/': 'https://api.foo.com/',
      '/external/': 'https://external-service.com/',
    },
    default: 'https://fallback-service.com/',
  },
});

export async function main(req: FleekRequest): Promise<FleekResponse> {
  return await proxy.proxyRequest(req);
}
```

# Release Process

This project follows SemVer for versioning. Here's how to release a new version:

1. **Update Version Number**: Bump the version number in package.json using npm version (patch/minor/major). This will update the version number in package.json and create a new Git tag.

```bash
pnpm version patch
```

2. **Push Changes and Tags**

```bash
git push origin main --follow-tags
```

3. **GitHub Actions Automation**: A GitHub Actions workflow automatically publishes the package to npm when a new tag is pushed.

# Contributing

Thanks for considering contributing to our project!

## How to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes.
4. Commit your changes using conventional commits.
5. Push to your fork and submit a pull request.

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

- `test`: 💍 Adding missing tests
- `feat`: 🎸 A new feature
- `fix`: 🐛 A bug fix
- `chore`: 🤖 Build process or auxiliary tool changes
- `docs`: ✏️ Documentation only changes
- `refactor`: 💡 A code change that neither fixes a bug or adds a feature
- `style`: 💄 Markup, white-space, formatting, missing semi-colons...
