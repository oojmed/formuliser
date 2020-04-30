import { default as subscriptiseTests } from './subscriptise';

import { default as unsubscriptiseTests } from './unsubscriptise';

import { default as evalExp } from './evalExp';

import { default as balance } from './balance';

let tests = [...subscriptiseTests,
  ...unsubscriptiseTests,
  balance,
  evalExp];

export default tests;