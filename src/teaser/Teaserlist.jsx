import React from 'react'
import T from 'prop-types'
import { Box } from 'rebass'
import { TeaserText, TeaserTop } from './Teaser'

const TeaserWithProps = ({ type, ...props }) =>
  type === 'teaser-text' ? (
    <TeaserText key={props.overline + props.title} {...props} />
  ) : type === 'teaser-top' ? (
    <TeaserTop key={props.overline + props.title} {...props} />
  ) : (
    <Box />
  )

export const TeaserList = ({ teasers, ...props }) => (
  <Box {...props}>
    {teasers.map(p => (
      <Box mt={4}>{<TeaserWithProps {...p} />}</Box>
    ))}
  </Box>
)

TeaserList.propTypes = {
  ...Box.propTypes,
  teasers: T.array.isRequired,
}
