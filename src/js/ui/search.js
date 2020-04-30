import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { equationLookup } from '/js/info/equations';

import { interpretInput } from '/js/ui/formula';

import * as QuizGen from '/js/quiz/gen';

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

  if (method === 'fuzzy') {
    let searchRegex = typeof toFind === 'string' ? generateThroughSearchRegex(toFind) : toFind;

    return toSearch.match(searchRegex) !== null;
  }
}

function generateSearchList(search, sort, id, list) {
  search = search === undefined ? '' : search;
  sort = sort === undefined ? 'abc' : sort;

  document.getElementById(id).innerHTML = '';

  let searchRegex = generateThroughSearchRegex(search);

  let toSearch = list.filter((x) => searchText(x.name, search, 'index', false));

  if (sort === 'zyx') {
    toSearch = toSearch.sort(function(a, b) {
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

  for (let i = 0; i < toSearch.length; i++) {
    let el = document.createElement('button');
    el.innerText = toSearch[i].name;

    el.oncontextmenu = function() {
      QuizGen.performCompoundQuiz(toSearch[i]);

      return false;
    };

    el.onclick = function() {
      document.getElementById('formula').value = toSearch[i].formula;
      interpretInput();
    };

    document.getElementById(id).appendChild(el);
  }

  let el = document.createElement('button');
  el.className = 'list-results';
  el.disabled = true;

  let ending = toSearch.length > 1 ? 's' : '';

  el.innerText = `${toSearch.length} compound${ending}`;

  document.getElementById(id).appendChild(el);
}

function compoundSearch() {
  generateSearchList(document.getElementById('compound-search').value, document.getElementById('compound-sort').value, 'compound-list', compoundLookup);
}

function equationSearch() {
  generateSearchList(document.getElementById('equation-search').value, document.getElementById('equation-sort').value, 'equation-list', equationLookup);
}

export function init() {
  document.getElementById('compound-search').oninput = function() {
    compoundSearch();
  };

  document.getElementById('compound-sort').oninput = function() {
    compoundSearch();
  };


  document.getElementById('equation-search').oninput = function() {
    equationSearch();
  };

  document.getElementById('equation-sort').oninput = function() {
    equationSearch();
  };


  compoundSearch();
  equationSearch();
}