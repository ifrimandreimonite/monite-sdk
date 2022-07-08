import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const USyringe: FC<UniconProps> = ({
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
      d: 'M21.71,2.29a1,1,0,0,0-1.42,0L18.17,4.41l-.71-.7a1,1,0,0,0-1.41,0L14.64,5.12l-.71-.71a1,1,0,0,0-1.42,0L4.74,12.19,4,11.49A1,1,0,0,0,2.62,12.9l3.53,3.54L4.42,18.18l-.71-.72a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42l-.71-.7,1.74-1.74,3.53,3.53a1,1,0,0,0,.71.3,1,1,0,0,0,.7-1.71l-.7-.71,7.78-7.77a1,1,0,0,0,0-1.42l-.71-.71L20.29,8a1,1,0,0,0,0-1.41l-.7-.71,2.12-2.12A1,1,0,0,0,21.71,2.29ZM7.57,15,6.15,13.61l1.41-1.42L9,13.61Zm2.82,2.83L9,16.44,10.39,15l1.42,1.42ZM13.22,15,9,10.78l4.24-4.24.71.7h0l3.53,3.54ZM17.46,8,16.05,6.54l.71-.71.7.7h0l.7.7Z',
    })
  );

export default USyringe;
