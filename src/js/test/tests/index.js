import { default as subscriptiseTests } from './subscriptise';

import { default as unsubscriptiseTests } from './unsubscriptise';

import { default as evalExp } from './evalExp';

let tests = [...subscriptiseTests,
  ...unsubscriptiseTests,
  evalExp];

export default tests;