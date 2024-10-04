const advancedBtn = document.querySelector('.advanced-btn');
const advancedOptions = document.querySelector('.advanced-options');

advancedBtn.addEventListener('click', () => {
  advancedOptions.style.display = advancedOptions.style.display === 'block' ? 'none' : 'block';
});