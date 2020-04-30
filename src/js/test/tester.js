import Tests from './tests';

function enableTestingUI() {
  let testing = document.getElementById('testing');
  
  testing.className = 'show';
  
  /*testing.oncontextmenu = function(e) {
    performTests();
    return e.preventDefault();
  };*/
  
  testing.onauxclick = disableTestingUI;
}

function disableTestingUI() {
  document.getElementById('testing').className = '';
}

let runs = 1000;
let timeStart = 0;
let running = false;

export function performTests(_runs) {
  runs = _runs;

  enableTestingUI();
  
  let loadingParent = document.getElementById('testing-loading');
  loadingParent.className = 'show';
  
  let loadingBar = document.getElementById('testing-loading-bar');
  loadingBar.max = runs;

  setTimeout(actualTest, 0);
}

function actualTest() {
  let content = document.getElementById('testing-content');
  let header = document.getElementById('testing-header');
  
  let loadingParent = document.getElementById('testing-loading');
  let loadingLabel = document.getElementById('testing-loading-label');
  let loadingBar = document.getElementById('testing-loading-bar');

  timeStart = performance.now();
  running = true;
  
  for (let run = 0; run < runs; run++) {
    setTimeout(function() {
    if (!running) {
      return;
    }

    loadingBar.value = run + 1;
    loadingLabel.innerText = `Run ${run + 1}/${runs}`;
    
    content.innerHTML = '';
    
    let totalCategoriesPassed = 0;
    let totalIndividualsPassed = 0;
    let totalIndividuals = 0;
    
    let totalTimeTaken = 0;
    
    for (let test of Tests) {
      let timeStart = performance.now();
      
      let results = test.run();

      let timeTaken = performance.now() - timeStart;
      
      totalTimeTaken += timeTaken;
      
      let passed = results.filter(r => r.expected === r.result);
      let allPassed = passed.length === results.length;
      
      let parent = document.createElement('details');

      if (run + 1 === runs) {
        parent.setAttribute("open", "true");
      }

      let summaryParent = document.createElement('summary');
      
      let header = document.createElement('h2');
      
      header.setAttribute('before-text', allPassed ? '✔' : '✗');
      header.className = allPassed ? 'test-pass' : 'test-fail';
      
      header.innerText = `${test.name}`;
      
      let headerRight = document.createElement('h4');
      headerRight.innerText = `Took ${Math.round(timeTaken)}ms | ${passed.length}/${results.length} passed`;
      
      header.appendChild(headerRight);
      
      summaryParent.appendChild(header);
      
      parent.appendChild(summaryParent);
      
      let testsParent = document.createElement('div');
      
      // parent.appendChild(header);
      
      for (let result of results) {
        let el = document.createElement('h4');
        
        let passed = result.expected === result.result;
        
        el.setAttribute('before-text', passed ? '✔' : '✗');
        el.className = passed ? 'test-pass' : 'test-fail';
        
        el.innerText = `${result.name} | Given: ${result.given} | Result: ${result.result}` + (passed ? '' : ` | Expected: ${result.expected}`);
        
        testsParent.appendChild(el);
      }
      
      parent.appendChild(testsParent);
      
      content.appendChild(parent);
      
      totalIndividualsPassed += passed.length;
      totalIndividuals += results.length;
      
      if (allPassed) {
        totalCategoriesPassed++;
      }
    }
    
    header.className = totalCategoriesPassed === Tests.length ? 'test-pass' : 'test-fail';
    header.setAttribute('before-text', totalCategoriesPassed === Tests.length ? '✔' : '✗');
    
    header.innerText = `[Run ${run + 1}] ${totalCategoriesPassed}/${Tests.length} categories - ${totalIndividualsPassed}/${totalIndividuals} tests`;
    
    let tps = (run / (performance.now() - timeStart)) * 1000;

    document.getElementById('testing-right').innerHTML = `Total ${((performance.now() - timeStart) / 1000).toFixed(2)}s | TPS ${Math.round(tps)} | ETA ${((((runs / tps) * 1000) - (performance.now() - timeStart)) / 1000).toFixed(2)}s | Average ${Math.round((performance.now() - timeStart) / run)}ms`;
  
    if (totalCategoriesPassed !== Tests.length || run + 1 === runs) {
      running = false;
      loadingParent.className = '';

      document.getElementById('testing-right').innerHTML = `Total ${((performance.now() - timeStart) / 1000).toFixed(2)}s | Average ${Math.round((performance.now() - timeStart) / run)}ms`;
    }
    }, 0);
  }
}