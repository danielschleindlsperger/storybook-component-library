import * as React from 'react'
import cns from 'classnames'
import './Button.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 'small' | 'normal' | 'large'
  color: 'black' | 'white' | 'green'
  className?: string
  loading: boolean
  children: React.ReactText
}

const Loader: React.FC<{}> = () => (
  <div className="sk-circle">
    <div className="sk-circle1 sk-child" />
    <div className="sk-circle2 sk-child" />
    <div className="sk-circle3 sk-child" />
    <div className="sk-circle4 sk-child" />
    <div className="sk-circle5 sk-child" />
    <div className="sk-circle6 sk-child" />
    <div className="sk-circle7 sk-child" />
    <div className="sk-circle8 sk-child" />
    <div className="sk-circle9 sk-child" />
    <div className="sk-circle10 sk-child" />
    <div className="sk-circle11 sk-child" />
    <div className="sk-circle12 sk-child" />
  </div>
)

export const Button = ({ size, color, className, loading, children, ...props }: ButtonProps) => {
  const classes = cns('szde-button', `szde-button--${size}`, `szde-button--${color}`, className)
  return (
    <button className={classes} disabled={loading} {...props}>
      {loading && <Loader />}
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'normal',
  color: 'black',
  loading: false,
}
