import React from 'react'
import { Button as BaseButton } from 'rebass'
import T from 'prop-types'
import { sansSerif } from '../text-mixins'

export const Button = props => {
  const { variant, size } = props
  const fontSize = size === 'small' ? 1 : size === 'normal' ? 2 : 3
  const px = size === 'small' ? 3 : size === 'normal' ? 3 : 4
  const py = size === 'small' ? 1 : size === 'normal' ? 2 : 2
  const bg = variant === 'primary' ? 'black' : variant === 'secondary' ? 'green.2' : 'white'
  const color = variant === 'primary' ? 'white' : variant === 'secondary' ? 'grey.0' : 'black'
  return (
    <BaseButton
      css={{ ...sansSerif, cursor: 'pointer' }}
      borderRadius={0}
      px={px}
      py={py}
      fontSize={fontSize}
      color={color}
      bg={bg}
      border={variant === 'light' ? '1px solid' : 'none'}
      borderColor={variant === 'light' ? 'black' : ''}
      fontWeight="normal"
      {...props}
    />
  )
}

Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
}

Button.propTypes = {
  ...BaseButton.propTypes,
  variant: T.oneOf(['primary', 'secondary', 'light']).isRequired,
  size: T.oneOf(['small', 'normal', 'large']),
}
