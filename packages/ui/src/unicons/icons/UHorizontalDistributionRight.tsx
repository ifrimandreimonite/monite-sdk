import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UHorizontalDistributionRight: FC<UniconProps> = ({
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
      d: 'M19,2a1,1,0,0,0-1,1V4H13a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1h5v1a1,1,0,0,0,2,0V3A1,1,0,0,0,19,2ZM18,18H14V6h4ZM9,2A1,1,0,0,0,8,3V5H5A1,1,0,0,0,4,6V18a1,1,0,0,0,1,1H8v2a1,1,0,0,0,2,0V3A1,1,0,0,0,9,2ZM8,17H6V7H8Z',
    })
  );

export default UHorizontalDistributionRight;
