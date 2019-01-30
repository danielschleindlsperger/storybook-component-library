import React from 'react'
import { render } from 'react-dom'
import teasers from './teaser-mocks.json'
import { TeaserList } from 'storybook-component-library'

const App = () => <TeaserList teasers={teasers} />

render(<App />, document.querySelector('#app'))
