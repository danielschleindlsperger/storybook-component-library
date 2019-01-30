import { configure, addDecorator } from '@storybook/react'
import { withTheme } from '../internal/decorators'

addDecorator(withTheme)

const req = require.context('../src', true, /.stories.jsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
