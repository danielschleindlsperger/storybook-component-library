import React from 'react'
import { Text as BaseText, Heading } from 'rebass'
import { sansSerif } from './text-mixins'

export const Headline = props => <Heading as="h1" css={{ ...sansSerif }} {...props} />

Headline.propTypes = { ...Heading.propTypes }

export const Text = props => <BaseText as="p" css={{ ...sansSerif }} {...props} />

Text.propTypes = { ...BaseText.propTypes }
