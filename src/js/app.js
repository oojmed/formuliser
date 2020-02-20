import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';
import { scriptsLookup, scriptsLookupKeys } from '/js/info/scripts';
import { genNumPrefixes } from '/js/info/numPrefixes';

import * as Settings from '/js/info/settings';
import * as Pubchem from '/js/api/pubchem';

import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

import { showInstallPrompt } from '/js/pwa/installPrompt';
import * as CompoundSearch from '/js/ui/compoundSearch';
import {} from '/js/ui/dragPanels';
import * as Formula from '/js/ui/formula';
import * as Options from '/js/ui/options';
import * as Panels from '/js/ui/panels';
import * as Snackbar from '/js/ui/snackbar';

window.onload = function() {
  CompoundSearch.init();
  Formula.init();
  Options.init();
  Panels.init();
  Snackbar.init();
};

import { popupify, splitAndPopupify } from '/js/ui/popupify';

import { registerSW } from '/js/pwa/register.js';
registerSW();