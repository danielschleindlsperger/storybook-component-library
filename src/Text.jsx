import React from 'react'
import { Text as BaseText } from 'rebass'

export const SansSerif = props => (
  <BaseText
    css={{
      fontFamily: '"SZSansDigital", "Neue Helvetica", Helvetica, sans-serif',
    }}
    {...props}
  />
)

export const Serif = props => (
  <BaseText
    css={{
      fontFamily: '"SZ Serif", "SZ Text", Georgia, Times, serif',
    }}
    {...props}
  />
)

export const Text = props => (
  <BaseText
    css={{
      fontFamily: '"SZ Text", Georgia, Times, serif',
    }}
    {...props}
  />
)
