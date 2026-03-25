import React from 'react';
import { Button } from 'primereact/button';
import { Icon } from '@iconify/react';

interface NucSubmitButtonProps {
  label: string;
  icon?: string;
  className?: string;
onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
variant?: 'primary' | 'secondary';
}

export const NucSubmitButton: React.FC<NucSubmitButtonProps> = ({
  label,
  icon,
  className,
  onClick,
}) => {
  return (
    <Button 
      label={label} 
      className={`nuc-submit-button ${className || ''}`} 
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className="mr-2" />}
    </Button>
  );
};