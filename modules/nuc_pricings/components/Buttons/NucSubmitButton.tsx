import { Button } from 'primereact/button'
import React from 'react'

import { Icon } from '@iconify/react'

interface NucSubmitButtonProps {
  label: string
  icon?: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const NucSubmitButton: React.FC<NucSubmitButtonProps> = ({
  label,
  icon,
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <Button
      label={label}
      className={`nuc-submit-button ${className || ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <Icon icon={icon} className="mr-2" />}
    </Button>
  )
}
