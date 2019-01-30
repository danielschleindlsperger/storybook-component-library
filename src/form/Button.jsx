import React from 'react'
import { Button as BaseButton } from 'rebass'
import { SansSerif } from '../Text'

export const Button = props => (
  <BaseButton borderRadius={0} px={3} color="grey.0" bg="green.2" {...props} />
)
