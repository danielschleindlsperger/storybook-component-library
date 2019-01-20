import * as React from 'react'
import './layout.scss'

type SpacerProps = {
  size: number
}

export const Spacer = ({ size }: SpacerProps) => <div style={{ marginTop: size }} />

Spacer.defaultProps = {
  size: 30,
}

export const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="storybook-layout-row">{children}</div>
)
