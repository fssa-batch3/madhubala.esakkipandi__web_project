// fetch('https://api.ipify.org?format=json')
//   .then(response => response.json())
//   .then(data => {
//     const userIP = data.ip;
//     console.log(userIP);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   <!DOCTYPE html>
// <html>
// <head>
//   <title>My Web Page</title>
// </head>
// <body>
//   <h1>Welcome to my website!</h1>
//   <p>Your IP address is: <span id="user-ip"></span></p>

//   <script>
//     // Function to get the user's IP address
//     function getUserIP(callback) {
//       // Make a request to a third-party service to retrieve the IP address
//       fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => {
//           // Extract the IP address from the response
//           const userIP = data.ip;
//           // Pass the IP address to the callback function
//           callback(userIP);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           // Pass a default value to the callback function in case of an error
//           callback('unknown');
//         });
//     }

//     // Call the function and update the HTML element with the IP address
//     getUserIP(function(ip) {
//       document.getElementById('user-ip').textContent = ip;
//     });
//   </script>
// </body>
// </html>

// const userIpAddress = '123.456.789.0'; // Replace with the actual user's IP address

// fetch(`https://freegeoip.app/json/${userIpAddress}`)
//   .then(response => response.json())
//   .then(data => {
//     // Access the geolocation data returned by FreeGeoIP API
//     const country = data.country_name;
//     const region = data.region_name;
//     const city = data.city;
//     const latitude = data.latitude;
//     const longitude = data.longitude;

//     // Use the geolocation data as needed in your project
//     console.log(country, region, city, latitude, longitude);
//   })
//   .catch(error => {
//     // Handle any errors that occur during the API request
//     console.error('Error:', error);
//   });

//   es, there are several other map and location APIs available that you can consider as alternatives to Google Maps. Here are a few popular options:

// Leaflet: Leaflet is an open-source JavaScript library for interactive maps. It provides a lightweight and customizable solution for displaying maps and adding markers. You can find more information and documentation on the Leaflet website.

// Mapbox: Mapbox offers a suite of mapping tools and APIs for developers. Their services include map rendering, geocoding, routing, and more. You can explore their offerings and access their documentation on the Mapbox website.

// OpenLayers: OpenLayers is another open-source JavaScript library for displaying maps on the web. It provides a robust set of features for map customization and interactivity. You can learn more about OpenLayers and access their documentation on the OpenLayers website.

// HERE Maps: HERE Maps offers a comprehensive set of mapping and location-based services. Their APIs include map display, geocoding, routing, and more. You can find more information and access their documentation on the HERE Maps API website.

// These APIs provide various features and options for displaying maps, adding markers, and customizing the map appearance. Depending on your specific requirements and preferences, you can choose the one that best fits your needs.

// Remember to review the documentation and terms of use for each API to understand their features, usage limits, and any associated costs.





// User
// IFFY USED FOR HSOWIG THE LOCATION BUT WHEN WE NEED TO MARK THE LOCATION HOE CAN WE O THAT
// ChatGPT
// Apologies for any confusion caused. If you want to mark a specific location on a map using latitude and longitude coordinates, you can use various map libraries and APIs, including Google Maps, Leaflet, Mapbox, or OpenLayers. Here's an example using the Leaflet library:

// Include the Leaflet library in your HTML file:
// html
// Copy code
// <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
// Create a <div> element to hold the map:
// html
// Copy code
// <div id="map" style="height: 400px;"></div>
// Initialize the map and add a marker for the location:
// javascript
// Copy code
// // Initialize the map
// var map = L.map('map').setView([51.505, -0.09], 13);

// // Create a tile layer using a map provider
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//   maxZoom: 18
// }).addTo(map);

// // Add a marker for the location
// var marker = L.marker([51.5, -0.09]).addTo(map);
// In this example, we initialize a Leaflet map and set the center and zoom level using the setView method. Then, we create a tile layer using OpenStreetMap as the map provider and add it to the map. Finally, we add a marker for the location specified by latitude and longitude coordinates.

// Remember to replace [51.505, -0.09] with the actual latitude and longitude values of the location you want to mark.

// You can customize the map, marker, and other features based on your requirements using the Leaflet API. Refer to the Leaflet documentation for more information and examples on how to work with markers, layers, popups, and other map-related functionality.

// Note that this is a basic example, and you may need to adapt it according to your specific implementation and requirements.