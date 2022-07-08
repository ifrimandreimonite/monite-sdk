import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UArrow: FC<UniconProps> = ({
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
      d: 'M9.71,6.29a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,12l4.3-4.29A1,1,0,0,0,9.71,6.29Zm11,5-5-5a1,1,0,0,0-1.42,1.42L18.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,20.71,11.29Z',
    })
  );

export default UArrow;
