import jsrsasign from 'jsrsasign';

import { PRIVATE_PEM } from '/@/common/constants';
import { SignatureMessage } from '/@/common/types';

export const RSAEncrypt = (content: SignatureMessage) => {
  const sig = new jsrsasign.KJUR.crypto.Signature({ alg: 'SHA1withRSA' });
  sig.init(PRIVATE_PEM);
  sig.updateString(content);
  const sigVal = sig.sign();
  return jsrsasign.hextob64(sigVal);
};
