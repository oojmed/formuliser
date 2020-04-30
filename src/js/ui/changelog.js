export function init() {
  document.body.onclick = function(e) {
    if (document.getElementById('changelog').className === 'show' && e.path[0].id === 'changelogBackground') {
      hideChangelog();
    }
  };

  document.getElementById('changelogLink').onclick = showChangelog;
}

function showChangelog() {
  document.getElementById('changelog').className = 'show';
}

function hideChangelog() {
  document.getElementById('changelog').className = '';
}