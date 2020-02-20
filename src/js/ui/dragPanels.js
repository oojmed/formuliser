let leftDrag = false;
let rightDrag = false;
let topDrag = false;
let bottomDrag = false;

let lastTouchX = 0;
let lastTouchY = 0;

let startTouchX = 0;
let startTouchY = 0;

let maxTouchAcceleration = 0;

let deviceWidthOnePercent = 0;
let deviceHeightOnePercent = 0;

export function init() {
  deviceWidthOnePercent = document.body.clientWidth / 100;
  deviceHeightOnePercent = document.body.clientHeight / 100;
}

document.ontouchstart = function(e) {
  startTouchX = e.touches[0].pageX;
  startTouchY = e.touches[0].pageY;

  lastTouchX = startTouchX;
  lastTouchY = startTouchY;
};

document.ontouchmove = function(e) {
  let x = e.touches[0].pageX;
  let y = e.touches[0].pageY;

  let accX = lastTouchX - x;
  let accY = lastTouchY - y;

  let normalisedAccX = accX < 0 ? accX * -1 : accX;
  let normalisedAccY = accY < 0 ? accY * -1 : accY;

  let maxAccDiffX = maxTouchAcceleration - normalisedAccX;
  let maxAccDiffY = maxTouchAcceleration - normalisedAccY;

  if (maxAccDiffX < 0 && maxAccDiffY > maxAccDiffX) {
    if (accX < 0) {
      rightDrag = true;

      leftDrag = false;
      topDrag = false;
      bottomDrag = false;
    } else {
      leftDrag = true;

      rightDrag = false;
      topDrag = false;
      bottomDrag = false;
    }
  } else {
    if (maxAccDiffY < 0) {
      if (accY < 0) {
        bottomDrag = true;

        rightDrag = false;
        leftDrag = false;
        topDrag = false;
      } else {
        topDrag = true;

        leftDrag = false;
        rightDrag = false;
        bottomDrag = false;
      }
    }
  }

  if (maxAccDiffX < 0 && maxAccDiffX > maxAccDiffY) {
    maxTouchAcceleration = normalisedAccX;
  } else {
    if (maxAccDiffY < 0) {
      maxTouchAcceleration = normalisedAccY;
    }
  }

  lastTouchX = x;
  lastTouchY = y;
};

function coordInRect(x, y, rect) {
  return (x > rect.x && x < rect.x + rect.width) && (y > rect.y && y < rect.y + rect.height);
}

document.ontouchend = function(e) {
  let x = e.changedTouches[0].pageX;
  let y = e.changedTouches[0].pageY;

  let compoundsRect = document.getElementById('compounds-panel').getBoundingClientRect();

  if (!rightDrag && document.getElementById('compounds').className === 'show' && coordInRect(x, y, compoundsRect)) {
    console.log('compounds');
    return;
  }

  let optionsRect = document.getElementById('options-panel').getBoundingClientRect();

  if (!topDrag && document.getElementById('options').className === 'show' && coordInRect(x, y, optionsRect)) {
    console.log('options');
    return;
  }

  /*if (!rightDrag && document.getElementById('compounds').className === 'show' && (x > document.body.clientWidth - 210 && x < document.body.clientWidth - 10) && (y > (document.body.clientHeight / 2) - 200 && y < (document.body.clientHeight / 2) + 200)) {
    console.log('compounds');
    return;
  }*/

  /*if (!bottomDrag && document.getElementById('compounds').className === 'show' && (x > document.body.clientWidth - 210 && x < document.body.clientWidth - 10) && (y > (document.body.clientHeight / 2) - 200 && y < (document.body.clientHeight / 2) + 200)) {
    console.log('options');
    return;
  }*/

  console.log(leftDrag, rightDrag, topDrag, bottomDrag);

  if (leftDrag) {
    showPanel('compounds');
  }

  if (rightDrag) {
    hidePanel('compounds');
  }

  if (bottomDrag) {
    showPanel('options');
  }

  if (topDrag) {
    hidePanel('options');
  }

  startTouchX = 0;
  startTouchY = 0;

  lastTouchX = 0;
  lastTouchY = 0;

  maxTouchAcceleration = 0;

  rightDrag = false;
  leftDrag = false;
  topDrag = false;
  bottomDrag = false;
};