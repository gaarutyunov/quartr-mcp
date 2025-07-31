# Contributing to Quartr MCP Server

Thank you for your interest in contributing to the Quartr MCP Server! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/quartr-mcp.git
   cd quartr-mcp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Add your Quartr API key to `.env`:
   ```bash
   QUARTR_API_KEY=your-actual-api-key
   ```

3. Run the development build:
   ```bash
   npm run dev
   ```

## Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Ensure all TypeScript strict checks pass

## Testing

- Run tests before submitting PRs:
  ```bash
  npm test
  ```
- Add tests for new functionality when possible
- Test your changes with the demo script:
  ```bash
  npm run demo
  ```

## Submitting Changes

1. Ensure your code builds without errors:
   ```bash
   npm run build
   ```

2. Commit your changes with a clear message:
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## Pull Request Guidelines

- Provide a clear description of what your PR does
- Reference any related issues
- Include testing instructions if applicable
- Make sure CI checks pass
- Be responsive to feedback during review

## Types of Contributions

We welcome:

- Bug fixes
- New MCP tools for additional Quartr API endpoints
- Documentation improvements
- Performance optimizations
- Code quality improvements
- Build and deployment enhancements

## Questions?

If you have questions about contributing, please:

1. Check the existing issues and discussions
2. Review the [DEVELOPMENT.md](DEVELOPMENT.md) guide
3. Open a new issue for discussion

## Code of Conduct

Please be respectful and professional in all interactions. We aim to maintain a welcoming environment for all contributors.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
