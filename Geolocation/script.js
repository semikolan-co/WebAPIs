const statuss = document.querySelector('#status')
const latitude = document.querySelector('#latitude')
const longitude = document.querySelector('#longitude')
const heading = document.querySelector('#heading')
const speed = document.querySelector('#speed')
const altitude = document.querySelector('#altitude')
const accuracy = document.querySelector('#accuracy')
const altitudeAccuracy = document.querySelector('#altitudeAccuracy')
const result = document.querySelector('.results')
const trigger = document.querySelector('#trigger')


function geolocate() {

  const success = (position) => {

    latitude.innerHTML = position.coords.latitude + '&deg;'
    longitude.innerHTML = position.coords.longitude + '&deg;'
    heading.innerHTML = position.coords.heading ?? 'N/A'
    speed.innerHTML = position.coords.speed ?? 'N/A'
    altitude.innerHTML = position.coords.altitude ?? 'N/A'
    accuracy.innerHTML = (position.coords.accuracy / 1609).toFixed(3) + ' miles'
    altitudeAccuracy.innerHTML = (position.coords.altitudeAccuracy / 1609).toFixed(3) + ' miles'

    statuss.innerHTML = ''
    result.style.display = 'flex'
    statuss.style.display = 'none'
    trigger.innerHTML = 'Refresh location'
    console.log(position)
  }
  const error = () => {
    statuss.innerHTML = 'Unable to retrieve your location.'
  }
  if (navigator.geolocation) {
    statuss.innerHTML = 'Locating...'
    trigger.innerHTML = 'Locating...'
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    trigger.innerHTML = 'Not supported.'
    statuss.innerHTML = 'Geolocation is not supported by your browser.'
    statuss.style.display = 'block'

  }



}

trigger.addEventListener('click', () => {
  geolocate()
})