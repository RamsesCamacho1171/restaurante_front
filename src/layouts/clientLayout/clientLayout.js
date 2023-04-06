import React from 'react'
import './clientLayout.scss'

export function ClientLayout(props) {
  const {children} = props
  return (
    <div>
      <p>clientLayout</p>
      {children}
    </div>
  )
}
