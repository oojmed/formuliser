import { scriptsLookup, scriptsLookupKeys } from '/js/info/scripts';

export function unsubscriptise(value) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    value = value.replace(new RegExp(scriptsLookupKeys[i], 'gm'), scriptsLookup[scriptsLookupKeys[i]]);
  }

  return value;
}

export function subscriptise(value) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    let escape = false;
    escape = scriptsLookup[scriptsLookupKeys[i]] === '+' ? true : escape;
    escape = scriptsLookup[scriptsLookupKeys[i]] === '-' ? true : escape;

    value = value.replace(new RegExp((escape === true ? '\\' : '') + scriptsLookup[scriptsLookupKeys[i]], 'gm'), scriptsLookupKeys[i]);
  }

  return value;
}