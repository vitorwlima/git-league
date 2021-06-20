import React from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: string
  className?: string
  type: 'submit' | 'button' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  ...rest
}) => {
  return (
    <Container type={type} className={className}>
      {children}
    </Container>
  )
}

export default Button
