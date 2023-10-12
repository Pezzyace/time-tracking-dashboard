const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const dailyToggle = document.getElementById('dailyToggle');
const weeklyToggle = document.getElementById('weeklyToggle');
const monthlyToggle = document.getElementById('monthlyToggle');


dailyToggle.addEventListener("click", () => {
  daily.style.display = 'flex';
  monthly.style.display = 'none';
  weekly.style.display = 'none';
})

weeklyToggle.addEventListener("click", () => {
  daily.style.display = 'none';
  monthly.style.display = 'none';
  weekly.style.display = 'flex';
})

monthlyToggle.addEventListener("click", () => {
  daily.style.display = 'none';
  monthly.style.display = 'flex';
  weekly.style.display = 'none';
})