import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Image } from 'rebass'
import T from 'prop-types'
import { Headline, Text } from '../Text'
import { sansSerif } from '../text-mixins'

const linkBoxCss = `
  text-decoration: none;
  :visited {
    color: initial;
  }
`

const LinkBox = styled(Box)`
  display: block;
  ${linkBoxCss}
`

LinkBox.propTypes = {
  ...Box.propTypes,
}

LinkBox.defaultProps = {
  as: 'a',
}

export const TeaserTitle = props => (
  <Headline as="h2" fontSize={4} mt={2} {...sansSerif} {...props} />
)
export const TeaserOverline = props => <Headline as="h3" fontSize={2} {...sansSerif} {...props} />
export const TeaserSummary = props => <Text as="p" mt={2} mb={0} {...sansSerif} {...props} />

const teaserDefaultPropTypes = {
  overline: T.string,
  title: T.string.isRequired,
  summary: T.string.isRequired,
  url: T.string.isRequired,
}

export const TeaserText = ({ overline, title, summary, url, ...props }) => (
  <LinkBox as="a" href={url} width={['100%', 600]} {...props}>
    {overline && <TeaserOverline children={overline} />}
    <TeaserTitle children={title} />
    <TeaserSummary children={summary} />
  </LinkBox>
)

TeaserText.propTypes = {
  ...Box.propTypes,
  ...teaserDefaultPropTypes,
}

export const TeaserTop = ({ overline, title, summary, url, imageUrl, ...props }) => (
  <Flex
    as="a"
    href={url}
    flexWrap={['wrap', 'nowrap']}
    width={['100%', 600]}
    css={linkBoxCss}
    {...props}
  >
    <Image flex="0 0 auto" mr={4} src={`${imageUrl}/208x156`} />
    <Box mt={[3, 0]}>
      {overline && <TeaserOverline children={overline} />}
      <TeaserTitle children={title} />
      <TeaserSummary children={summary} />
    </Box>
  </Flex>
)

TeaserTop.propTypes = {
  ...Box.propTypes,
  ...teaserDefaultPropTypes,
  imageUrl: T.string.isRequired,
}
