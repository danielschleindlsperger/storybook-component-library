import React from 'react'
import { storiesOf } from '@storybook/react'
import { TeaserList, TeaserText, TeaserTop } from '.'
import teasers from './teaser-mocks.json'

storiesOf('Teaser', module).add('Teaser Text', () => <TeaserText {...teasers[0]} />)
storiesOf('Teaser', module).add('Teaser Top', () => <TeaserTop {...teasers[0]} />)
storiesOf('Teaser', module).add('Teaser List', () => <TeaserList teasers={teasers} />)
