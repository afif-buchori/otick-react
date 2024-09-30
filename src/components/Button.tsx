import React from 'react';

interface BtnProps {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline';
  size?: 'md' | 'xs' | 'none';
  children?: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({
  onClick,
  isLoading = false,
  disabled = false,
  className = '',
  type = 'button',
  variant = 'primary',
  size = 'md',
  children
}) => {
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    'primary-outline': 'btn btn-primary btn-outline',
    'secondary-outline': 'btn btn-secondary btn-outline',
  };

  const sizeClasses = {
    md: 'btn-sm h-10',
    xs: 'btn-sm',
    none: '',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {isLoading ? <span className='loading mx-4' /> : 
      children}
       
    </button>
  );
};

export default Button;
