import React from 'react';

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  variant?: string;
}

export const Image: React.FC<ImageProps> = ({
  variant,
  ...props
}): JSX.Element => {
  const style =
    variant === 'card' ? 'bg-toucan rounded-full shadow-md shadow-black' : '';

  return (
    <img
      {...props}
      src={props.src}
      width={props.width}
      alt={`${props.src}-image`}
      className={`${props.className} ${style}`}
    />
  );
};
