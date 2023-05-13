// let marker = L.marker([xView, yView]).addTo(map);
// let circle = L.circle([40.01, -0.05], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(map);

// function getIPLocation(ipAddress) {
//   sendHTTPRequest(`https://geo.ipify.org/api/v2/country?apiKey=at_7czW1HzLzj4G0gzjUjRBoroeLjlXM&ipAddress=${ipAddress}`)
//   .then(data => {
//     console.log(data);
//     intializeMap(data)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

// function getIPLocation(ipAddress) {
//   sendHTTPRequest(`https://api.ipfind.com?ip=${ipAddress}&auth=3302c3b3-a175-4987-8378-5157f6200498`)
//   .then(data => {
//     console.log(data);
//     document.getElementById("ipAddress").textContent = data["ip_address"]
//     document.getElementById("location").textContent = data.country
//     document.getElementById("timezone").textContent = data.timezone
//     document.getElementById("isp").textContent = data.region
//     intializeMap(data)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }


// function getIPLocation(ipAddress) {
//   sendHTTPRequest(`http://ip-api.com/json/${ipAddress}`)
//   .then(data => {
//     // console.log(data);
//     document.getElementById("ipAddress").textContent = data.query
//     document.getElementById("location").textContent = data.country
//     document.getElementById("timezone").textContent = data.timezone
//     document.getElementById("isp").textContent = data.isp
//     if (!map) {
//       intializeMap(data)
//     }
//     else {
//       changeLocation(data)
//     }
//   })
//   .catch(err => {
//     throw new Error(err)
//   })
// }

// 66.249.75.193
// 41.45.46.51
// aa02cbf94d1744efb22dca15b4d53747
// https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip=1.1.1.1