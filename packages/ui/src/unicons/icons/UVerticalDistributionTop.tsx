import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UVerticalDistributionTop: FC<UniconProps> = ({
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
      d: 'M3,6H4v5a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V6h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6ZM6,6H18v4H6Zm15,8H3a1,1,0,0,0,0,2H5v3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V16h2a1,1,0,0,0,0-2Zm-4,4H7V16H17Z',
    })
  );

export default UVerticalDistributionTop;
