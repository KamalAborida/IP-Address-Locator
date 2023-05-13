const ipInpt = document.getElementById("ipInpt")
const ipBtn = document.getElementById("ipBtn")
const searchDiv = document.getElementById("searchDiv")
let map

function getIPLocation(ipAddress) {
  sendHTTPRequest(`https://ip-api.com/json/${ipAddress}`)
  .then(data => {
    // console.log(data);
    document.getElementById("ipAddress").textContent = data.query
    document.getElementById("location").textContent = data.country
    document.getElementById("timezone").textContent = data.timezone
    document.getElementById("isp").textContent = data.isp
    if (!map) {
      intializeMap(data)
    }
    else {
      changeLocation(data)
    }
  })
  .catch(err => {
    throw new Error(err)
  })
}

function ipHandler() {
  ipAddress = ipInpt.value
  let ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  if (!ipRegex.test(ipAddress)) {
    ipInpt.classList.add("error")
    searchDiv.classList.add("error")
    ipInpt.placeholder = "Wrong IP Address"
    ipInpt.value = ""
  }
  else {
    ipInpt.classList.remove("error")
    searchDiv.classList.remove("error")
    getIPLocation(ipAddress)
  }
}

function sendHTTPRequest(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {  // success
        resolve(JSON.parse(xhr.response))
      }
      else {
        reject(xhr.status)
        // reject(new Error("Something went wrong"))
      }
    }

    xhr.onerror = () => {
      reject(new Error("Failed to send request!"))
    }

    xhr.send(JSON.stringify(data))
  })
}

function intializeMap(data) {
  map = L.map('map').setView([data.lat, data.lon], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  let marker = L.marker([data.lat, data.lon]).addTo(map);
}

function changeLocation(data) {
  map.setView([data.lat, data.lon], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  let marker = L.marker([data.lat, data.lon]).addTo(map);
}


ipBtn.addEventListener("click", ipHandler)