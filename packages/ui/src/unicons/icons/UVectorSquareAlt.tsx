import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UVectorSquareAlt: FC<UniconProps> = ({
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
      d: 'M16,7H8A1,1,0,0,0,7,8v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8A1,1,0,0,0,16,7Zm-1,8H9V9h6Zm6,3.28V5.72A2,2,0,1,0,18.28,3H5.72A2,2,0,1,0,3,5.72V18.28A2,2,0,1,0,5.72,21H18.28A2,2,0,1,0,21,18.28Zm-2,0a1.91,1.91,0,0,0-.72.72H5.72A1.91,1.91,0,0,0,5,18.28V5.72A1.91,1.91,0,0,0,5.72,5H18.28a1.91,1.91,0,0,0,.72.72Z',
    })
  );

export default UVectorSquareAlt;