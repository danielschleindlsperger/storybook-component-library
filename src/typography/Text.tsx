import * as React from 'react'
import cns from 'classnames'
import './Text.scss'

export type FontSize = 10 | 14 | 16 | 20 | 24
export type FontColor = 'black' | 'white' | 'darkgrey' | 'red'
export type FontSpacing = 'narrow' | 'normal' | 'wide'

type TextProps = React.HTMLAttributes<HTMLElement> & {
  size: FontSize
  color: FontColor
  spacing: FontSpacing
  tag: string
  className?: string
  children: React.ReactNode
}

export const Text = ({ size, color, spacing, tag, className, children, ...props }: TextProps) => {
  const classes = cns(
    'szde-text',
    `szde-text--color-${color}`,
    `szde-text--size-${size}`,
    `szde-text--spacing-${spacing}`,
    className,
  )
  return React.createElement(tag, { children, className: classes, ...props })
}

Text.defaultProps = {
  size: 24,
  color: 'black',
  spacing: 'normal',
  tag: 'p',
}
