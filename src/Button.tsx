import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({children, ...props}: Props) => {
  return (
    <button {...props}>
     {children}
    </button>
  )
}