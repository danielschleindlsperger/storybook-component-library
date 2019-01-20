import * as React from 'react'
import cns from 'classnames'
import './Headline.scss'

type HeadlineSize = 16 | 24 | 36 | 48 | 72
type HeadlineColor = 'black' | 'white' | 'darkgrey' | 'red'
type HeadlineSpacing = 'narrow' | 'normal' | 'wide'

type HeadlineProps = React.HTMLAttributes<HTMLElement> & {
  size: HeadlineSize
  color: HeadlineColor
  spacing: HeadlineSpacing
  tag: string
  className?: string
  children: React.ReactNode
}

export const Headline = ({
  size,
  color,
  spacing,
  tag,
  className,
  children,
  ...props
}: HeadlineProps) => {
  const classes = cns(
    'szde-headline',
    `szde-headline--color-${color}`,
    `szde-headline--size-${size}`,
    `szde-headline--spacing-${spacing}`,
    className,
  )
  return React.createElement(tag, { children, className: classes, ...props })
}

Headline.defaultProps = {
  size: 24,
  color: 'black',
  spacing: 'normal',
  tag: 'h2',
}
