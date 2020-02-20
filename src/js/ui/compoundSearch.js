import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { interpretInput } from '/js/ui/formula';

function generateThroughSearchRegex(s) {
  return new RegExp(s.toLowerCase().split('').join('.*'))
}

function searchText(toSearch, toFind, method, caseSensitive) {
  method = method === undefined ? 'index' : method;

  toSearch = caseSensitive === true ? toSearch : toSearch.toLowerCase();
  toFind = caseSensitive === true ? toFind : toFind.toLowerCase();

  if (method === 'index') {
    return toSearch.indexOf(toFind) !== -1;
  }

  if (method === 'through') {
    let searchRegex = typeof toFind === 'string' ? generateThroughSearchRegex(toFind) : toFind;

    return toSearch.match(searchRegex) !== null;
  }
}

function generateCompoundList(search, sort) {
  search = search === undefined ? '' : search;
  sort = sort === undefined ? 'abc' : sort;

  document.getElementById('compound-list').innerHTML = '';

  let searchRegex = generateThroughSearchRegex(search);

  let compounds = compoundLookup.filter((x) => searchText(x.name, search, 'index', false));

  if (sort === 'zyx') {
    compounds = compounds.sort(function(a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return -1;
      }

      if (nameA < nameB) {
        return 1;
      }

      return 0;
    });
  }

  for (let i = 0; i < compounds.length; i++) {
    let el = document.createElement('button');
    el.innerText = compounds[i].name;

    el.onclick = function() {
      document.getElementById('formula').value = compounds[i].formula;
      interpretInput();
    };

    document.getElementById('compound-list').appendChild(el);
  }

  let el = document.createElement('button');
  el.id = 'compound-list-results';
  el.disabled = true;

  let ending = compounds.length > 1 ? 's' : '';

  el.innerText = `${compounds.length} compound${ending}`;

  document.getElementById('compound-list').appendChild(el);
}

function compoundSearch() {
  generateCompoundList(document.getElementById('compound-search').value, document.getElementById('compound-sort').value);
}

export function init() {
  document.getElementById('compound-search').oninput = function() {
    compoundSearch();
  };

  document.getElementById('compound-sort').oninput = function() {
    compoundSearch();
  };

  generateCompoundList();
}