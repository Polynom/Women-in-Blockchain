import {Observable} from "rxjs";

import BigNumber from 'bignumber.js';
import w3 from "./w3";

const p = (new BigNumber(10)).pow(18);
const balance = new Observable((subject) => {
  const e = () => {
    w3.eth.getBalance('0x933c13230c0978c0bf210d80704c59082d01b08b').then((b) => {
      subject.next(
        (new BigNumber(b)).div(p)
      );
    });
  };

  setInterval(() => e(), 2000);
  e();
});

export default balance;