# sweet-potato

# For contributors

Thank you for improving the code! There are things you need to remember to collaborate with others.

- When creating a pull request to resolve an issue, please leave comment in the issue to avoid working on the same issue as someone else.
- Keep your PR as small as possible. This means limit your PR to one type (docs, feature, refactoring, ci, or bugfix)

#### keep code clean

You need to pass a CI that does lint and build checks.

```sh
# Run before commit.
yarn lint && yarn format

# Run before push. (There are no test cases yet.)
yarn test
```

#### useful VSCode plugin

- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
