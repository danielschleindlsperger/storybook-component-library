# Example Component Libary

## How to Use

```jsx
import React from 'react'
import { Button } from 'storybook-component-library'

export const AlertButton = ({ whatNow }) => (
  <Button onClick={() => alert(whatNow)}>Click me!</Button>
)
```

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
