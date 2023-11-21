// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const applyFilterButton = document.getElementById('applyFilterButton');
    const resetFilterButton = document.getElementById('resetFilterButton');
  
    applyFilterButton.addEventListener('click', function () {
      const selectedFilter = document.querySelector('input[name="colorFilter"]:checked');
  
      if (selectedFilter) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'applyFilter', filter: selectedFilter.value });
        });
      }
    });
  
    resetFilterButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'resetFilter' });
      });
    });
  });
  