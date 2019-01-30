import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { SansSerif, Serif, Text } from './Text'
import { theme } from './theme'

storiesOf('Text', module).add('Sans Serif', () => (
  <ThemeProvider theme={theme}>
    <SansSerif>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum molestiae, quas et odio
      incidunt quam excepturi adipisci perferendis eius laboriosam consectetur sed itaque? Facere
      aperiam atque esse quaerat vel minus asperiores sequi eius iure, culpa expedita illo incidunt
      ducimus voluptate dolore, sapiente, officiis velit earum fuga alias deleniti quam tempora!
    </SansSerif>
  </ThemeProvider>
))
storiesOf('Text', module).add('Serif', () => (
  <ThemeProvider theme={theme}>
    <Serif>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum molestiae, quas et odio
      incidunt quam excepturi adipisci perferendis eius laboriosam consectetur sed itaque? Facere
      aperiam atque esse quaerat vel minus asperiores sequi eius iure, culpa expedita illo incidunt
      ducimus voluptate dolore, sapiente, officiis velit earum fuga alias deleniti quam tempora!
    </Serif>
  </ThemeProvider>
))

storiesOf('Text', module).add('Text', () => (
  <ThemeProvider theme={theme}>
    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum molestiae, quas et odio
      incidunt quam excepturi adipisci perferendis eius laboriosam consectetur sed itaque? Facere
      aperiam atque esse quaerat vel minus asperiores sequi eius iure, culpa expedita illo incidunt
      ducimus voluptate dolore, sapiente, officiis velit earum fuga alias deleniti quam tempora!
    </Text>
  </ThemeProvider>
))
