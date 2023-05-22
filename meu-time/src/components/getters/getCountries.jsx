
import getLeagues from "./getLeagues";

function getCountries() {

    fetch("https://api-football-beta.p.rapidapi.com/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            "x-rapidapi-key": "23e07d05d4mshf6d5c7d4497e61ap15e2c2jsnaed65a8bcb1e"
        }
    })
        .then(response => response.json())
        .then(data => {

            console.log(data)


            for (var i = 0; i < data.response.length; i++) {


                var label = document.getElementById('label')


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

                countryItem.addEventListener('click', getLeagues)

            }

        })
        .catch(err => {
            console.log(err);
        });
}

export default getCountries