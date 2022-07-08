import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UBorderLeft: FC<UniconProps> = ({
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
      d: 'M11.5,19a1,1,0,1,0,1,1A1,1,0,0,0,11.5,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,11.5,15Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,11.5,11Zm-8-8a1,1,0,0,0-1,1V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3.5,3Zm16,2a1,1,0,1,0-1-1A1,1,0,0,0,19.5,5Zm-8,2a1,1,0,1,0,1,1A1,1,0,0,0,11.5,7Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,7.5,11Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,7.5,19Zm0-16a1,1,0,1,0,1,1A1,1,0,0,0,7.5,3Zm12,8a1,1,0,1,0,1,1A1,1,0,0,0,19.5,11Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,15Zm-8-12a1,1,0,1,0,1,1A1,1,0,0,0,11.5,3Zm8,16a1,1,0,1,0,1,1A1,1,0,0,0,19.5,19Zm0-12a1,1,0,1,0,1,1A1,1,0,0,0,19.5,7Zm-4-4a1,1,0,1,0,1,1A1,1,0,0,0,15.5,3Zm0,16a1,1,0,1,0,1,1A1,1,0,0,0,15.5,19Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,15.5,11Z',
    })
  );

export default UBorderLeft;
