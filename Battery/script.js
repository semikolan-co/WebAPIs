const level = document.querySelector('.level');
const fill = document.querySelector('.fill');
const colors = {
    high: '#59ef0b',
    normal: '#d76a04',
    low: '#e70707'
}

const updateBattery = batt => {
    const battlevel = (batt > 75 ? 'high' : (batt < 20 ? 'low' : 'normal'));
    fill.style.setProperty('--batteryLevel', `${~~batt}%`);
    fill.style.setProperty('--batteryColor', colors[battlevel]);
    level.dataset.level = fill.style.height = `${~~batt}%`;
  }

navigator.getBattery().then(battery => {
   
    // This argument passed here is BatteryManager
    // Here BatteryManager is an reference as `battery`
    // BatteryManager has 4 Properties
    // 1. charging - boolean - Indicates whether Battery is currently charging or not
    // 2. chargingTime - number - Time in seconds until the battery is fully charged (if charging)
    // 3. dischargingTime - number - Time in seconds until the battery is fully discharged (if not charging)
    // 4. level - number - Percentage of battery charge (0-1)

    // You can Access these values like this
    const isCharging = battery.charging;
    const chargingTime = battery.chargingTime;
    const dischargingTime = battery.dischargingTime;
    const level = battery.level;


  updateBattery(battery.level * 100);
  
  if (battery.dischargingTime == Infinity)
    level.classList.add('power');
  
  if (battery.charging)
    level.classList.toggle('charge');
  



  battery.addEventListener('levelchange', function() {
    updateBattery(this.level * 100);
  });
  
  battery.addEventListener('chargingchange', function() {
    level.classList.toggle('charge');
  });
});