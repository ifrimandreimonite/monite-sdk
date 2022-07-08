import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UAdjustCircle: FC<UniconProps> = ({
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
      d: 'M17,7A7.74,7.74,0,1,0,7,17,7.74,7.74,0,1,0,17,7Zm-1.6,1.6a6.12,6.12,0,0,1,.11,1.14,5.92,5.92,0,0,1-.16,1.34L12.91,8.66a5.92,5.92,0,0,1,1.34-.16A6.12,6.12,0,0,1,15.39,8.61ZM14.46,13A6,6,0,0,1,13,14.46L9.54,11A6,6,0,0,1,11,9.54Zm-8,1.46a5.75,5.75,0,1,1,8-8h-.25A7.76,7.76,0,0,0,6.5,14.25C6.5,14.33,6.51,14.42,6.51,14.5Zm2.1.89a6.12,6.12,0,0,1-.11-1.14,5.92,5.92,0,0,1,.16-1.34l2.43,2.43a5.92,5.92,0,0,1-1.34.16A6.12,6.12,0,0,1,8.61,15.39ZM14.25,20A5.77,5.77,0,0,1,9.5,17.49h.25A7.76,7.76,0,0,0,17.5,9.75c0-.08,0-.17,0-.25A5.75,5.75,0,0,1,14.25,20Z',
    })
  );

export default UAdjustCircle;
