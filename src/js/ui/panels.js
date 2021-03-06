export function togglePanel(id) {
  let parent = document.getElementById(id);

  if (parent.className === '') {
    showPanel(id);
  } else {
    hidePanel(id);
  }
}

export function showPanel(id) {
  let parent = document.getElementById(id);

  parent.className = 'show';
}

export function hidePanel(id) {
  let parent = document.getElementById(id);

  parent.className = '';
}

export function init() {
  document.getElementById("options-drawer").onclick = function() {
    togglePanel('options');
  };

  document.getElementById("compounds-drawer").onclick = function() {
    togglePanel('compounds');

    if (document.getElementById('compounds').className === 'show') {
      setTimeout(function() { document.getElementById('compound-search').focus(); }, 600);
    }
  };

  document.getElementById("equations-drawer").onclick = function() {
    togglePanel('equations');

    if (document.getElementById('equations').className === 'show') {
      setTimeout(function() { document.getElementById('equation-search').focus(); }, 600);
    }
  };
}