import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const ULockSlash: FC<UniconProps> = ({
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
      d: 'M10.84,5.38a2,2,0,0,1,2.57.21A2,2,0,0,1,14,7v3a1,1,0,0,0,1,1h1a1,1,0,0,1,1,1v.34a1,1,0,0,0,2,0V12a3,3,0,0,0-3-3V7a4,4,0,0,0-1.17-2.83,4.06,4.06,0,0,0-5.19-.39,1,1,0,1,0,1.2,1.6ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L7.62,9A3,3,0,0,0,5,12v6a3,3,0,0,0,3,3h8a3,3,0,0,0,2.39-1.2l1.9,1.91a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM16,19H8a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H9.59l2.07,2.07A1,1,0,0,0,11,14v2a1,1,0,0,0,2,0V14.41l3.93,3.93A1,1,0,0,1,16,19Z',
    })
  );

export default ULockSlash;
