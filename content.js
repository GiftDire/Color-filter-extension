function applyFilter(filter) {
    const filterStyles = {
      grayscale: 'grayscale(100%)',
      invert: 'invert(100%)',
      'high-contrast': 'contrast(150%)', // Example high contrast filter
      
    };
  
    const selectedStyle = filterStyles[filter];
  
    if (selectedStyle) {
      document.body.style.filter = selectedStyle;
    } else {
      document.body.style.filter = 'none'; // Reset to default if the filter is not recognized
    }
  }
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'applyFilter') {
      applyFilter(request.filter);
    } else if (request.action === 'resetFilter') {
      document.body.style.filter = 'none'; // Reset the filter to default
    }
  });
  //contentn js 