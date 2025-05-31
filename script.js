// Discover Something New
const discoverButton = document
  .getElementById('discover-btn')
  .addEventListener('click', function () {
    window.location.href = '/Blog.html';
  });
// Complete Button Task
let minusCount = 6;
let plusCount = 23;
const completeButtons = document.querySelectorAll
  ('.btn.btn-active.btn-primary');
let clickedCount = 0;
completeButtons.forEach(function (button,index) {
  button.addEventListener("click", function () {
    button.disabled = true;
    alert('You have clicked the button');
    plusCount++;
    minusCount--;
    clickedCount++;
    document.getElementById('minus-count').textContent = minusCount;
    document.getElementById('plus-count').textContent = plusCount;
    // History Section
    const currentTime = new Date().toLocaleTimeString();
    // const btnHistory = document.getElementById('btn-history');
    const historyList = document.createElement('p');
    historyList.textContent = `You have click ${index + 1} at ${currentTime}`;
    document.getElementById('history-container').appendChild(historyList);
    btnHistory.appendChild(historyList);
    if (clickedCount === completeButtons.length) {
      alert('You have completed all task successfully');
    }
  })
})
// History Delete
document.getElementById('btn-history').addEventListener("click", function () {
 const historyContainer = document.getElementById('history-container');
  while (historyContainer.firstChild) {
    historyContainer.removeChild(historyContainer.firstChild)
  }
});

