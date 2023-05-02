const element = document.getElementById("myBtn");
		element.addEventListener("click", function () {
			search()
		});

		function search() {
			const input = document.getElementById("search").value;
			const apiKey = '4af6ebc02091900d1a0eeb7808df470e';
			const city = input;

			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
				.then(response => response.json())
				.then(data => {
					console.log(data);
					document.getElementById("conditions").innerHTML = data.weather[0]['description'];
					document.getElementById("temperature").innerHTML = data.main.temp + 'C';
					document.getElementById("windSpeed").innerHTML = data.wind.speed + 'km/h';
				})
				.catch(error => {
					console.log('Error fetching weather data:', error);
				});
		}