import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UUtensils: FC<UniconProps> = ({
  color = 'currentColor',
  size,
  ...otherProps
}) =>
  createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: color,
      ...otherProps,
    },
    createElement('path', {
      d: 'M19,2a1,1,0,0,0-1,1V8.46l-1,.67V3a1,1,0,0,0-2,0V9.13l-1-.67V3a1,1,0,0,0-2,0V9a1,1,0,0,0,.45.83L15,11.54V21a1,1,0,0,0,2,0V11.54l2.55-1.71A1,1,0,0,0,20,9V3A1,1,0,0,0,19,2ZM9,2H9A5,5,0,0,0,4,7v6a1,1,0,0,0,1,1H8v7a1,1,0,0,0,2,0V3A1,1,0,0,0,9,2ZM8,12H6V7A3,3,0,0,1,8,4.17Z',
    })
  );

export default UUtensils;
