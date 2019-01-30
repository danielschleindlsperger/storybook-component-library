import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from 'rebass'
import { Button } from './Button'

storiesOf('Form', module).add('Button', () => (
  <React.Fragment>
    <Box m={3}>
      <Button>Primary Button</Button>
    </Box>
    <Box m={3}>
      <Button variant="secondary">Secondardy Button</Button>
    </Box>
    <Box m={3}>
      <Button variant="light">Light Button</Button>
    </Box>
    <Box m={3}>
      <Button size="small">Small Button</Button>
    </Box>
    <Box m={3}>
      <Button size="large">Large Button</Button>
    </Box>
    <Box m={3}>
      <Button as="a" href="#">
        Link Button
      </Button>
    </Box>
  </React.Fragment>
))
