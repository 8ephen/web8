document.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('size-slider');
  var boxa = document.getElementById('resizable-boxa');
  var boxb = document.getElementById('resizable-boxb');
  var boxc = document.getElementById('resizable-boxc');
  var gap = document.getElementById('grid1');
  var sliderContainer = document.getElementById('slider-container');
  var grid = document.getElementById('grid1');

  slider.addEventListener('input', function() {
    var newSize = slider.value;
    boxa.style.width = newSize + 'vw';
    boxa.style.height = newSize + 'vw';
    boxb.style.width = newSize + 'vw';
    boxb.style.height = newSize + 'vw';
    boxc.style.width = newSize + 'vw';
    boxc.style.height = newSize + 'vw';
    gap.style.columnGap = (newSize / 2) + 'vw';
  });

  window.addEventListener('scroll', function() {
    if (!grid || !sliderContainer) return;
    var gridRect = grid.getBoundingClientRect();
    var programBar = document.getElementById('program-bar');
    var programKnowledge = document.querySelector('.LapAppsTitle');
    // Show slider only if any part of the grid is in view
    if (gridRect.bottom > 0 && gridRect.top < window.innerHeight) {
      sliderContainer.style.display = 'block';
      if (programBar) programBar.style.display = 'none';
    } else {
      sliderContainer.style.display = 'none';
      // Show program bar only when Program Knowledge heading is in view
      if (programBar && programKnowledge) {
        var pkRect = programKnowledge.getBoundingClientRect();
        if (pkRect.top < window.innerHeight && pkRect.bottom > 0) {
          programBar.style.display = 'flex';
        } else {
          programBar.style.display = 'none';
        }
      }
    }
  });
});
