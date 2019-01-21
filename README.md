# Example Component Libary

## How to Use

### Add dependency

`npm i storybook-component-library` (actually just `npm link` it)

### Import styles once

```ts
// example entry file
import * as React from 'react'
import { render } from 'react-dom'
import 'storybook-component-library/dist/index.css'
import { App } from './App.tsx'

render(<App />, document.querySelector('#app'))
```

### Use Components

```ts
import * as React from 'react'
import { Button } from 'storybook-component-library'

type Props = { whatNow: string }

export const AlertButton = ({ whatNow }: Props) => (
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
