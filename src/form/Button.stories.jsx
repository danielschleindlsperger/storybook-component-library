import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Button } from './Button'
import { theme } from '../theme'

storiesOf('Form', module).add('Button', () => (
  <ThemeProvider theme={theme}>
    <Button>Standard Button</Button>
  </ThemeProvider>
))
