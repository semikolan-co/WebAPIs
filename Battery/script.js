const level = document.querySelector(".level");
const fill = document.querySelector(".fill");
const message = document.querySelector(".message");
const colors = {
  high: "#64ffda",
  normal: "#ffda0c",
  low: "#e70707"
};

const updateBattery = (batt) => {
  const battlevel = batt > 75 ? "high" : batt < 20 ? "low" : "normal";
  fill.style.setProperty("--batteryLevel", `${~~batt}%`);
  fill.style.setProperty("--batteryColor", colors[battlevel]);
  level.dataset.level = fill.style.height = `${~~batt}%`;
};

const updateChargingStatus = (isCharging, chargingTime, dischargingTime) => {
  if (isCharging) {
    level.classList.add("charge");
    message.textContent = "Charging";
    message.textContent +=
      " - will take " + chargingTime + " Seconds to charge Completely";
  } else {
    level.classList.remove("charge");
    message.textContent = "Discharging";
    message.textContent +=
      " - will take " + dischargingTime + " Seconds to discharge Completely";
  }
};

navigator.getBattery().then((battery) => {
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

  // Updating Battery Level
  updateBattery(level * 100);
  updateChargingStatus(isCharging, chargingTime, dischargingTime);

  // if (battery.dischargingTime == Infinity) level.classList.add("power");

  // BatteryManager has 4 Events also
  // 1. chargingchange - Event fired when the charging status of the battery changes
  // 2. chargingtimechange - Event fired when the charging time of the battery changes
  // 3. dischargingtimechange - Event fired when the discharging time of the battery changes
  // 4. levelchange - Event fired when the battery level changes

  // Event Listener for chargingchange
  battery.addEventListener("chargingchange", (b) => {
    b = b.target;
    updateChargingStatus(b.charging, b.chargingTime, b.dischargingTime);
  });

  // Event Listener for levelchange
  battery.addEventListener("levelchange", (b) => {
    b = b.target;
    updateBattery(b.level * 100);
  });

  // Event Listener for chargingtimechange
  battery.addEventListener("chargingtimechange", (b) => {
    b = b.target;
    updateChargingStatus(b.charging, b.chargingTime, b.dischargingTime);
  });

  // Event Listener for dischargingtimechange
  battery.addEventListener("dischargingtimechange", (b) => {
    b = b.target;
    updateChargingStatus(b.charging, b.chargingTime, b.dischargingTime);
  });
});
