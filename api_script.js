
const submitBtn = document.getElementById("submitBtn");
let city = document.querySelector("#city");

function getDetails() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb44e91892mshe42f5bdd43a2668p19288bjsn3f5681682fd7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    let cityName = city.value;
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=%3C' + cityName + '%3E', options)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            // console.log(response.location);
            // console.log(response.current);
            let cityNameHtmlElement = document.getElementById('cityName');
            cityNameHtmlElement.innerHTML = response.location.name;
            let country = document.getElementById('country');
            let name = document.getElementById('name');
            let region = document.getElementById('region');
            let latitude = document.getElementById('lat');
            let longitude = document.getElementById('lon');
            let localtime = document.getElementById('localtime');
            name.innerHTML = response.location.name;
            region.innerHTML = response.location.region;
            country.innerHTML = response.location.country;
            latitude.innerHTML = response.location.lat;
            longitude.innerHTML = response.location.lon;
            localtime.innerHTML = response.location.localtime;
            let temp = document.getElementById('temp_c');
            let feels_like = document.getElementById('feelslike_c');
            let humidity = document.getElementById('humidity');
            let visibility = document.getElementById('vis_km');
            let wind_speed = document.getElementById('wind_kph');
            let percipitate = document.getElementById('precip_mm');
            temp.innerHTML = response.current.temp_c;
            feels_like.innerHTML = response.current.feelslike_c;
            humidity.innerHTML = response.current.humidity;
            visibility.innerHTML = response.current.vis_km;
            wind_speed.innerHTML = response.current.wind_kph;
            percipitate.innerHTML = response.current.precip_mm;


        }
        )
        .catch(err => console.error(err));

    const option3 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb44e91892mshe42f5bdd43a2668p19288bjsn3f5681682fd7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q='+cityName, option3)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.astronomy);
            let sunrise= document.getElementById('sunrise');
            let sunset= document.getElementById('sunset');
            let moonrise= document.getElementById('moonrise');
            let moonset= document.getElementById('moonset');
            let moon_phase= document.getElementById('moon_phase');
            let moon_illumination= document.getElementById('moon_illumination');
            sunrise.innerHTML= response.astronomy.astro.sunrise;
            sunset.innerHTML= response.astronomy.astro.sunset;
            moonrise.innerHTML= response.astronomy.astro.moonrise;
            moonset.innerHTML= response.astronomy.astro.moonset;
            moon_phase.innerHTML= response.astronomy.astro.moon_phase;
            moon_illumination.innerHTML= response.astronomy.astro.moon_illumination;
        }
     )
        .catch(err => console.error(err));




}

submitBtn.addEventListener('click', function () {

    console.log(city.value);
    getDetails();
});
// real time weather api



//     // sports api
// const option2 = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'cb44e91892mshe42f5bdd43a2668p19288bjsn3f5681682fd7',
//         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//     }
// };

// fetch('https://weatherapi-com.p.rapidapi.com/sports.json?q=Delhi', option2)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// // Astronomy data api
// const option3 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cb44e91892mshe42f5bdd43a2668p19288bjsn3f5681682fd7',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherapi-com.p.rapidapi.com/astronomy.json?q=London', option3)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    // is_moon_up
    // is_sun_up
    // moon_illumination
    // moon_phase
    // moonrise: "08:00 AM"
    // moonset: "07:08 PM"
    // sunrise: "07:03 AM"
    // sunset: "05:26 PM"
