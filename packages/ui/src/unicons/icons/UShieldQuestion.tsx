import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UShieldQuestion: FC<UniconProps> = ({
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
      d: 'M11.29,14.66a1,1,0,0,0-.29.7,1,1,0,0,0,.08.39A1,1,0,0,0,13,15.36a1,1,0,0,0-.29-.7A1,1,0,0,0,11.29,14.66Zm8.34-11a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39ZM12,7.36a3,3,0,0,0-2.6,1.5,1,1,0,0,0,1.73,1A1,1,0,1,1,12,11.36a1,1,0,0,0,0,2,3,3,0,1,0,0-6Z',
    })
  );

export default UShieldQuestion;
