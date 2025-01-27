import { ButtonProps as HDButtonProps, Button as HUButton } from '@headlessui/react';
import { BasicSize, BasicVariant } from '@hd/types';

export type ButtonProps = {
  size?: BasicSize;
  variant?: BasicVariant;
  isCustom?: boolean;
} & HDButtonProps;

export const Button = (props: ButtonProps) => {
  const getSize = (): string => {
    switch (props.size) {
      case 'sm':
        return 'text-sm py-2 px-4';
      case 'md':
        return 'text-md py-2.5 px-5';
      case 'lg':
        return 'text-lg py-3 px-6';
      default:
        return 'text-md py-2.5 px-5';
    }
  };

  const getVariant = (): string => {
    switch (props.variant) {
      case 'primary':
        return 'bg-yellow-600/75';
      case 'secondary':
        return 'bg-slate-400';
      case 'danger':
        return 'bg-red-300';
      default:
        return 'bg-amber-500/80';
    }
  };

  return (
    <HUButton
      {...props}
      className={`rounded-lg  hover:opacity-85 ${!props.isCustom ? 'text-white shadow-lg' : ''} ${
        !props.isCustom ? getSize() : ''
      } ${!props.isCustom ? getVariant() : ''} ${props.className}`}
    />
  );
};
