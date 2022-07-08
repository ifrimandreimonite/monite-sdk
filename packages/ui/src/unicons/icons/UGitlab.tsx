import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UGitlab: FC<UniconProps> = ({
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
      d: 'M21.93927,12.86542,20.87433,9.58563l.0011.00446L20.87415,9.585l-.00007-.00024V9.58459L18.76,3.07593a.83318.83318,0,0,0-.79865-.57013.82178.82178,0,0,0-.78851.57519L15.16614,9.25885H8.83435L6.82391,3.08057a.82167.82167,0,0,0-.78839-.57483H6.03107a.83857.83857,0,0,0-.796.57544L3.12683,9.58392l-.0003.00086V9.5849l-.00129.005.0011-.00451-1.06884,3.28a1.19529,1.19529,0,0,0,.43426,1.33917l9.229,6.70557.00428.00262.01178.00836-.011-.00787-.00006-.00006.00189.00116.00165.001.00018.00013a.46566.46566,0,0,0,.04444.02734l.00616.00378.00012.00007.00379.00213.003.00122.00219.00086.00531.00225.02472.01032.02314.0097.001.00043.00385.00159.00488.00177.00195.00049.00641.00152.00244.00055c.01111.00336.02259.0058.03406.00836l.01331.00324.00195.00049.00439.001.00727.00153.00586.00049.001.00006h.0003A.4672.4672,0,0,0,11.99731,21h.0008a.46889.46889,0,0,0,.0664-.00531h.00025l.0011-.00006.00592-.00049.00732-.00153.00434-.001.00189-.00049.01361-.0033.03363-.00824.00232-.00049.00659-.00164.002-.00043.005-.00183.00378-.00159.001-.00043.02454-.01019.02282-.00958.0055-.00232.00225-.00092.00306-.00128.004-.00219.00006-.00007.00635-.0039a.46772.46772,0,0,0,.04419-.02716l.0036-.00214.00092-.00061.00433-.00268,9.23041-6.70563A1.19522,1.19522,0,0,0,21.93927,12.86542Zm-3.972-9.17975L19.7774,9.25885H16.157ZM6.02979,3.68561,7.84332,9.25885H4.223ZM3.046,13.44238a.25481.25481,0,0,1-.09222-.28546l.79449-2.43829,5.82184,7.464Zm1.494-3.24109h3.6098l2.57342,7.92737Zm7.16467,10.69642-.00537-.00458-.00116-.001-.01044-.009-.01965-.01807.00165.00134.00219.00184a.47345.47345,0,0,0,.04261.03631l.00048.00037.002.00177Zm.29352-1.8938-1.51435-4.66468L9.1405,10.20129h5.71936Zm.30993,1.87921-.01055.00909-.00123.0011-.00531.00452-.0122.009.002-.00171.00037-.0003a.45512.45512,0,0,0,.04242-.0362l.00171-.0014.00213-.00183Zm3.54279-10.68183h3.60956l-.73865.94642-5.448,6.98046Zm5.10028,3.24091-6.52319,4.73889,5.82373-7.46191.79138,2.43725A.25519.25519,0,0,1,20.95111,13.4422Z',
    })
  );

export default UGitlab;
