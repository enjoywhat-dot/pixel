
const popup = document.getElementById('notePopup');
const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('click', (e) => {
    popup.textContent = day.dataset.note;
    const rect = day.getBoundingClientRect();
    popup.style.left = rect.left + 'px';
    popup.style.top = rect.bottom + window.scrollY + 'px';
    popup.style.display = 'block';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('day')) {
    popup.style.display = 'none';
  }
});
