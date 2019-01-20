# Example Component Libary

## Development

```bash
# Start storybook
npm run storybook
```

## Release

```bash
  # Add a version tag
  npm version major|minor|patch

  # Builds and publishes project
  npm run publish
```

## Caveats

- Styles are inlined in JS right now, TODO: explore how we can publish a `.css` file or `.scss` files that have to be compiled by the consumer
