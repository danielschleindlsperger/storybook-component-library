import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Headline, Text } from '../src/typography'
import { Spacer } from './layout'

storiesOf('Typography', module).add('Headline', () => (
  <React.Fragment>
    <Headline tag="h1" size={72}>
      Headline 72px
    </Headline>
    <Spacer />
    <Headline tag="h2" size={48}>
      Headline 48px
    </Headline>
    <Spacer />
    <Headline tag="h2" size={36}>
      Headline 36px
    </Headline>
    <Spacer />
    <Headline tag="h3" size={24}>
      Headline 24px
    </Headline>
    <Spacer />
    <Headline tag="h4" size={16}>
      Headline 16px
    </Headline>
  </React.Fragment>
))

storiesOf('Typography', module).add('Text', () => (
  <React.Fragment>
    <Text size={10}>
      Text 10px Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, provident?
    </Text>
    <Spacer />
    <Text size={14}>
      Text 14px Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quam. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Mollitia, optio?
    </Text>
    <Spacer />
    <Text size={16}>
      Text 16px Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorum! Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Ad obcaecati tenetur soluta omnis possimus
      asperiores quae quaerat odio quidem! Numquam praesentium vero totam deleniti. Est accusamus
      inventore aliquam optio distinctio.
    </Text>
    <Spacer />
    <Text size={20}>
      Text 20px Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse!
    </Text>
    <Spacer />
    <Text size={24}>
      Text 24px Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iste!
    </Text>
  </React.Fragment>
))
