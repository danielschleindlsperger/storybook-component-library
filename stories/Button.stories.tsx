import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../src/input/Button'
import { Row, Spacer } from './layout'

storiesOf('Input', module).add('Button', () => (
  <React.Fragment>
    <Row>
      <Button onClick={action('clicked')}>hello button</Button>
      <Button color="white" onClick={action('clicked')}>
        white button
      </Button>
      <Button color="green" onClick={action('clicked')}>
        green button
      </Button>
    </Row>
    <Spacer />
    <Row>
      <Button size="small" onClick={action('clicked')}>
        small button
      </Button>
      <Button size="small" color="white" onClick={action('clicked')}>
        small white button
      </Button>
      <Button size="small" color="green" onClick={action('clicked')}>
        small green button
      </Button>
    </Row>
    <Spacer />
    <Row>
      <Button disabled>disabled button</Button>
    </Row>
    <Spacer />
    <Row>
      <Button loading>loading button</Button>
    </Row>
  </React.Fragment>
))
