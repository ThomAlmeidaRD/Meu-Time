
import API_KEY from "../keys";

function loadCountries() {



    fetch("https://v3.football.api-sports.io/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {

            console.log(data)

            for (var i = 0; i < data.response.length; i++) {

                var countriesList = document.querySelector('#countries-list')

                var countryItem = document.createElement('li')
                var countryFlag = document.createElement('img')
                var countryTitle = document.createElement('h3')
                var icon = document.createElement('ion-icon')

                countryItem.classList.add('country-item')
                countryTitle.classList.add('title')

                countryFlag.src = data.response[i].flag
                countryTitle.innerText = data.response[i].name
                icon.name = 'chevron-forward'

                countryItem.appendChild(countryFlag)
                countryItem.appendChild(countryTitle)
                countryItem.appendChild(icon)

                countriesList.appendChild(countryItem)

                countryItem.addEventListener('click', function () {
                    var country_name = this.childNodes[1].innerText
                    console.log(country_name)
                })
            }

        })
        .catch(err => {
            console.log(err);
        });
}

export default loadCountries